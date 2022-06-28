// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "./transferCapsule.sol";
import "./nftCapsule.sol";
import "./mixedCapsule.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/Clones.sol";


contract walletFactory {

    address immutable walletImplementation;
    address immutable nftWalletImplementation;
    address immutable walletMixedImplementation;
    event contractCreation(address cloneAddress, address ownedBy);

    constructor() public {
        walletImplementation = address (new erc20Capsule());
        nftWalletImplementation = address(new nftCapsule());
        walletMixedImplementation = address(new mixedCapsule());
    }

    function createWalletContract() public {
        address clone = Clones.clone(walletImplementation);
        erc20Capsule(clone).initialize();
        erc20Capsule(clone).transferOwnership(msg.sender);
        emit contractCreation(clone, msg.sender);
    }

    function createWalletContract2() public {
        address clone = Clones.clone(nftWalletImplementation);
        nftCapsule(clone).initialize();
        nftCapsule(clone).transferOwnership(msg.sender);
        emit contractCreation(clone, msg.sender);
    }

    function createWalletContract3() public {
        address clone = Clones.clone(walletMixedImplementation);
        mixedCapsule(clone).initialize();
        mixedCapsule(clone).transferOwnership(msg.sender);
        emit contractCreation(clone, msg.sender);
    }

}