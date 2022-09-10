// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "./ERC20Capsule.sol";
import "./NftCapsule.sol";
import "./MixedCapsule.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

contract CapsuleFactory {
    address immutable walletImplementation;
    address immutable nftWalletImplementation;
    address immutable walletMixedImplementation;
    event contractCreation(address cloneAddress, address ownedBy);

    constructor() public {
        walletImplementation = address(new ERC20Capsule());
        nftWalletImplementation = address(new NftCapsule());
        walletMixedImplementation = address(new MixedCapsule());
    }

    function createWalletContract() public {
        address clone = Clones.clone(walletImplementation);
        ERC20Capsule(clone).initialize();
        ERC20Capsule(clone).transferOwnership(msg.sender);
        emit contractCreation(clone, msg.sender);
    }

    function createWalletContract2() public {
        address clone = Clones.clone(nftWalletImplementation);
        NftCapsule(clone).initialize();
        NftCapsule(clone).transferOwnership(msg.sender);
        emit contractCreation(clone, msg.sender);
    }

    function createWalletContract3() public {
        address clone = Clones.clone(walletMixedImplementation);
        MixedCapsule(clone).initialize();
        MixedCapsule(clone).transferOwnership(msg.sender);
        emit contractCreation(clone, msg.sender);
    }
}
