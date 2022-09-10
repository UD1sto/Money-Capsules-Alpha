// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

//smart contract used as multycurrency storage space, the logic here is to minimize multycurrency gas fees.
//This is possible because currency transfers directly go to the smart contract address. When the smart contract owner
//wants to transfer the multiple currencies inside the smart contract all he needs to do is to transfer ownership of the smart contract
contract ERC20Capsule is OwnableUpgradeable {
    address public segment1;
    address public segment2;
    address public segment3;

    function initialize() public initializer {
        __Ownable_init();
    }

    function deposit() public payable {}

    //transfer ownership is used to transfer the contract/capsule ownership
    function transferOwnership(address newOwner) public override onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    // In this implementation only the Owner can own native value inside the capsule
    function withdrawNative(address payable recipient, uint256 amount) public onlyOwner {
        require(amount != 0);
        recipient.transfer(amount);
    }

    function transferAny(
        address erc20Adress,
        address payable recipient,
        uint256 amount
    ) public onlyOwner {
        // require(
        //     erc20Adress != Tokens.mockToken1 &&
        //         erc20Adress != Tokens.mockToken2 &&
        //         erc20Adress != Tokens.mockToken3 &&
        //         erc20Adress != Tokens.mockToken4 &&
        //         erc20Adress != Tokens.mockToken5 &&
        //         erc20Adress != Tokens.mockToken6,
        //     "Illigal Token Transfer"
        // );

        IERC20(erc20Adress).transfer(recipient, amount);
    }

    //Onwer transferring segments, the address needs to be set to 0 for it to be changed from the owner
    //**compare with a loop implementation for gas costs
    function transSeg1(address coOwner) public {
        require(segment1 == msg.sender || (segment1 == address(0) && owner() == _msgSender()));
        segment1 = coOwner;
    }

    function transSeg2(address coOwner) public {
        require(segment2 == msg.sender || (segment2 == address(0) && owner() == _msgSender()));
        segment2 = coOwner;
    }

    function transSeg3(address coOwner) public {
        require(segment3 == msg.sender || (segment3 == address(0) && owner() == _msgSender()));
        segment3 = coOwner;
    }

    //Segment Owner transfering tokens tied to each segment
    function transferTokenS1(
        address erc20Adress,
        address payable recipient,
        uint256 amount
    ) public {
        require(amount != 0);
        require(segment1 == msg.sender);
        // require(erc20Adress == Tokens.mockToken1 || erc20Adress == Tokens.mockToken2);

        IERC20(erc20Adress).transfer(recipient, amount);
    }

    function transferTokenS2(
        address erc20Adress,
        address payable recipient,
        uint256 amount
    ) public {
        require(amount != 0);
        require(segment2 == msg.sender);
        // require(erc20Adress == Tokens.mockToken3 || erc20Adress == Tokens.mockToken4);

        IERC20(erc20Adress).transfer(recipient, amount);
    }

    function transferTokenS3(
        address erc20Adress,
        address payable recipient,
        uint256 amount
    ) public {
        require(amount != 0);
        require(segment3 == msg.sender);
        // require(erc20Adress == Tokens.mockToken5 || erc20Adress == Tokens.mockToken6);

        IERC20(erc20Adress).transfer(recipient, amount);
    }
}
