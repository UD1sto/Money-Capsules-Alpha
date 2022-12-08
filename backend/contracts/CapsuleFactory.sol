// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "./ERC20Capsule.sol";
import "./NftCapsule.sol";
import "./MixedCapsule.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

contract CapsuleFactory {
    address private immutable erc20WalletImplementation;
    address private immutable nftWalletImplementation;
    address private immutable mixedWalletImplementation;

    event erc20CapsuleCreation(address cloneAddress, address ownedBy);
    event nftCapsuleCreation(address cloneAddress, address ownedBy);
    event mixedCapsuleCreation(address cloneAddress, address ownedBy);

    constructor() {
        erc20WalletImplementation = address(new ERC20Capsule());
        nftWalletImplementation = address(new NftCapsule());
        mixedWalletImplementation = address(new MixedCapsule());
    }

    function createERC20Capsule() external {
        address clone = Clones.clone(erc20WalletImplementation);
        ERC20Capsule(clone).initialize();
        ERC20Capsule(clone).transferOwnership(msg.sender);
        emit erc20CapsuleCreation(clone, msg.sender);
    }

    function createNftCapsule() external {
        address clone = Clones.clone(nftWalletImplementation);
        NftCapsule(clone).initialize();
        NftCapsule(clone).transferOwnership(msg.sender);
        emit nftCapsuleCreation(clone, msg.sender);
    }

    function createMixedCapsule() external {
        address clone = Clones.clone(mixedWalletImplementation);
        MixedCapsule(clone).initialize();
        MixedCapsule(clone).transferOwnership(msg.sender);
        emit mixedCapsuleCreation(clone, msg.sender);
    }
}
