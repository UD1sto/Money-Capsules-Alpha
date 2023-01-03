// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "./ERC20Capsule.sol";

contract Swap {
    // * A struct that will store the requests for swapping
    struct SwapInfo {
        address user1;
        address user2;
        address user1Capsule;
        address user2Capsule;
        bool user1Allowed;
        bool user2Allowed;
    }

    mapping(address => mapping(address => SwapInfo)) private swaps;

    // * Here user 1 will come and request to swap capule with user 2
    function requestSwap(
        address msgSenderCapsule,
        address swapWithUser,
        address userCapsule
    ) external {
        require(
            swapWithUser != address(0) ||
                userCapsule != address(0) ||
                msgSenderCapsule != address(0),
            "Zero address not allowed"
        );
        swaps[msg.sender][swapWithUser] = SwapInfo(
            msg.sender,
            swapWithUser,
            msgSenderCapsule,
            userCapsule,
            true,
            false
        );
        swaps[swapWithUser][msg.sender] = SwapInfo(
            msg.sender,
            swapWithUser,
            msgSenderCapsule,
            userCapsule,
            true,
            false
        );
    }

    // * swap function that will be used to swap capsule
    // requirements: both user should have allowed for swapping
    function swap(address user) external {
        SwapInfo memory swapInfo = swaps[msg.sender][user];
        require(
            swapInfo.user1Allowed == true || swapInfo.user2Allowed == true,
            "Swap: User not allowed yet"
        );
        ERC20Capsule(swapInfo.user1Capsule).transferOwnership(swapInfo.user2);
        ERC20Capsule(swapInfo.user2Capsule).transferOwnership(swapInfo.user1);
    }

    function getSwapInfo(address user) external view returns (SwapInfo memory swapInfo) {
        swapInfo = swaps[msg.sender][user];
    }
}
