// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./ERC20Capsule.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// @dev this contract will be deployed by Capsule finanace and be used by all capusule for pricing data
contract AssetRegistry is Ownable {

    mapping(address => AggregatorV3Interface) private s_priceFeeds;

    constructor(
        address[] memory tokens,
        address[] memory priceFeeds
    ) {
        for (uint256 i = 0; i < tokens.length; i++) {
            // mapping token address => chainlink price feeds
            s_priceFeeds[tokens[i]] = AggregatorV3Interface(priceFeeds[i]);
        }
    }

    function getLatestPrice(address tokenAddress) public view returns (uint256, uint256) {
        (, int256 price, , , ) = s_priceFeeds[tokenAddress].latestRoundData();
        uint256 decimals = uint256(s_priceFeeds[tokenAddress].decimals());
        return (uint256(price), decimals);
    }
}