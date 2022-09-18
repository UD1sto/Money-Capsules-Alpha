// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

uint8 dec = 18;
 
contract GenericERC20 is ERC20 {
    constructor(string name, string symbol, uint _dec) ERC20("name", "symbol") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
        if (dec != 0){
        dec = _dec
        }
    }
    
    function decimals() public view override returns (uint8) {
        return dec;
    }
}
