// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

//receiver 1155
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
//interface 721, to be minimized later
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
//interface 1155, to be minimized later
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

//smart contract used as multycurrency storage space, the logic here is to minimize multycurrency gas fees.
//This is possible because currency transfers directly go to the smart contract address. When the smart contract owner
//wants to transfer the multiple currencies inside the smart contract all he needs to do is to transfer ownership of the smart contract
contract NftCapsule is OwnableUpgradeable {
    function initialize() public initializer {
        __Ownable_init();
    }

    function deposit() public payable {}

    function transferOwnership(address newOwner) public override onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    function withdrawNative(address payable recipient, uint256 amount) public onlyOwner {
        require(amount != 0);
        recipient.transfer(amount);
    }

    function withdraw721(
        address nft721,
        address to,
        uint256 id
    ) public onlyOwner {
        IERC721(nft721).transferFrom(address(this), to, id);
    }

    function withdraw1155(
        address nft1155,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) public onlyOwner {
        IERC1155(nft1155).safeTransferFrom(address(this), to, id, amount, data);
    }

    function batchWithdraw(
        address nft1155,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) public onlyOwner {
        IERC1155(nft1155).safeBatchTransferFrom(address(this), to, ids, amounts, data);
    }
}
