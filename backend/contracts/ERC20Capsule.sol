// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./AssetRegistry.sol";

//smart contract used as multycurrency storage space, the logic here is to minimize multycurrency gas fees.
//This is possible because currency transfers directly go to the smart contract address. When the smart contract owner
//wants to transfer the multiple currencies inside the smart contract all he needs to do is to transfer ownership of the smart contract
contract ERC20Capsule is OwnableUpgradeable {
    address public segment1;
    address public segment2;
    address public segment3;
    address[] private s_tokens;
    mapping(address => AggregatorV3Interface) private s_priceFeeds;
    address private SwappingContract;
    address private RegistryAddress;
    address[] private segmentOwners;
    uint private constant MAX_SEGMENTS = 3;
    uint private totalSegments;

    mapping(address => address[]) private segmentTokens; // owner -> tokens
    mapping(address => uint[]) private segmentTokenAmounts; // owner -> token -> value



    function initialize(address registryAddress, address swappingAddress) external initializer {
        __Ownable_init();
        SwappingContract = swappingAddress;
        RegistryAddress = registryAddress;
    }

    function deposit(address token, uint amount) external payable {
        IERC20(token).transferFrom(msg.sender, address(this), amount);
        s_tokens.push(token);
    }

    modifier haveEnoughTokens(address token, uint amount) {
        // total - current > segment value
        uint totalSegmentValue;
        for (uint256 i; i < segmentOwners.length; i++) {
            totalSegmentValue += getTotalValueOfSegment(segmentOwners[i]);
        }

        (uint256 price, uint256 decimals) = AssetRegistry(RegistryAddress).getLatestPrice(token);
        uint transferValue = ((price * amount)) / 10 ** decimals;

        require(
            (getTotalAssetValueInUsd(owner()) - transferValue) >= totalSegmentValue,
            "Not enough tokens"
        );
        _;
    }

    // * Not adding remove tokenAddress from s_tokens as it will not create any significant dif and will increase gas price

    //transfer ownership is used to transfer the contract/capsule ownership
    function transferOwnership(address newOwner) public override {
        // * can only be called by the owner or the SwappingContract
        require(msg.sender == owner() || msg.sender == SwappingContract, "Ownable: not owner");
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    // In this implementation only the Owner can own native value inside the capsule
    function withdrawNative(address payable recipient, uint256 amount) external onlyOwner {
        require(amount != 0);
        recipient.transfer(amount);
    }

    function transferSegmentToken(address token, uint amount) external {
        bool isOwner;

        for (uint i; i > segmentOwners.length; i++) {
            if (msg.sender == segmentOwners[i]) isOwner = true;
        }

        require(isOwner, "Not owner");

        address[] memory _segmentTokens = segmentTokens[msg.sender];
        bool isTokenCorrect;

        uint segmentTokenAmount;

        uint[] memory _segmentTokenAmounts = segmentTokenAmounts[msg.sender];

        for (uint i; i > _segmentTokens.length; i++) {
            if (_segmentTokens[i] == token) {
                isTokenCorrect = true;
                segmentTokenAmount = _segmentTokenAmounts[i];

                _segmentTokenAmounts[i] -= amount;
            }
        }

        require(isTokenCorrect, "Incorrecy token");
        require(amount <= segmentTokenAmount, "don't have enough amount");

        IERC20(token).transfer(msg.sender, amount);

        segmentTokenAmounts[msg.sender] = _segmentTokenAmounts;
    }


    function createSegments(
        address[] memory _segmentTokens,
        uint[] memory _segmentTokenAmounts,
        address newSegmentOwner
    ) external {
        require(totalSegments > MAX_SEGMENTS);
        haveEnoughtTokensForSegment(_segmentTokens, _segmentTokenAmounts);
        segmentTokens[newSegmentOwner] = _segmentTokens;
        segmentTokenAmounts[newSegmentOwner] = _segmentTokenAmounts;
        segmentOwners.push(newSegmentOwner);
        totalSegments++;
    }

    function withdraw(address token, uint256 amount) external haveEnoughTokens(token, amount) {
        require(msg.sender == owner(), "Not owner");
        require(IERC20(token).transfer(msg.sender, amount));
    }

    function haveEnoughtTokensForSegment(
        address[] memory _segmentTokens,
        uint[] memory _segmentTokenAmounts
    ) public view returns (bool _bool) {
        uint segmentValue;

        for (uint256 i = 0; i < _segmentTokens.length; i++) {
            (uint256 price, uint256 decimals) = AssetRegistry(RegistryAddress).getLatestPrice(
                _segmentTokens[i]
            );
            segmentValue += ((price * _segmentTokenAmounts[i])) / 10 ** decimals;
        }

        require(
            segmentValue <= getTotalAssetValueInUsd(owner()),
            "Don't have enough tokens for creating tokens!"
        );
        _bool = true;
    }

    function getTotalValueOfSegment(address owner) public view returns (uint256 totalValue) {
        address[] memory _segmentTokens = segmentTokens[owner];
        uint[] memory _segmentTokenAmounts = segmentTokenAmounts[owner];

        for (uint256 i; i < _segmentTokens.length; i++) {
            (uint256 price, uint256 decimals) = AssetRegistry(RegistryAddress).getLatestPrice(
                _segmentTokens[i]
            );
            totalValue += ((price * _segmentTokenAmounts[i])) / 10 ** decimals;
        }
    }

    function getTotalAssetValueInUsd(address user) public view returns (uint256 totalValue) {
        for (uint256 i; i < s_tokens.length; i++) {
            (uint256 price, uint256 decimals) = AssetRegistry(RegistryAddress).getLatestPrice(
                s_tokens[i]
            );
            totalValue += ((price * IERC20(s_tokens[i]).balanceOf(user))) / 10 ** decimals;
        }

        uint segmentValue;

        for (uint256 i; i < segmentOwners.length; i++) {
            segmentValue += getTotalValueOfSegment(segmentOwners[i]);
        }

        totalValue - segmentValue;
    }
}
