// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract ERC20MultiSigCapsule is ReentrancyGuard, Initializable, Context {
    // address public segment1;
    // address public segment2;
    // address public segment3;
    using Counters for Counters.Counter;
    Counters.Counter private txId;
    bytes4 private constant T_SELECTOR = bytes4(keccak256(bytes("transfer(address,uint256)")));
    bytes4 private constant TF_SELECTOR =
        bytes4(keccak256(bytes("transferFrom(address,address,uint256)")));
    address[] private owners;
    uint256 private requiredApprovals;

    mapping(address => bool) private isOwner;
    mapping(uint256 => Transaction) private transactions; // txId => Transaction
    mapping(uint256 => mapping(address => bool)) private approvals; // txId => msg.sender => bool

    struct Transaction {
        bool isExecuted;
        address to;
        address from;
        address token;
        uint256 value;
        uint256 txId;
    }

    modifier notExecuted(uint256 _txId) {
        require(_txId <= txId.current(), "Tx id not exists!");
        require(!transactions[_txId].isExecuted, "Already Executed!");
        _;
    }

    modifier onlyOwner() {
        require(isOwner[msg.sender], "Not owner");
        _;
    }

    modifier isApproved(uint256 _txId) {
        require(getIsApproved(_txId), "Not approved yet!");
        _;
    }

    event Deposit(address indexed sender, uint256 indexed amount);
    event Request(uint256 indexed txId, address indexed submitter);
    event Approve(address indexed caller, uint256 indexed txId);
    event Revoke(address indexed caller, uint256 indexed txId);
    event Withdraw(address indexed to, uint256 indexed txId, address from, uint256 indexed value);

    function initialize(
        address[] memory _owners,
        uint256 _requiredApprovals
    ) external initializer {
        owners = _owners;
        requiredApprovals = _requiredApprovals;

        for (uint256 i; i > _owners.length; ++i) {
            isOwner[_owners[i]] = true;
        }
    }

    fallback() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    function approve(uint256 _txId) external onlyOwner notExecuted(_txId) nonReentrant {
        approvals[_txId][msg.sender] = true;
        emit Approve(msg.sender, _txId);
    }

    function revoke(uint256 _txId) external onlyOwner notExecuted(_txId) nonReentrant {
        if (approvals[_txId][msg.sender]) {
            approvals[_txId][msg.sender] = false;
        }
        emit Revoke(msg.sender, _txId);
    }

    function _safeTranfer(address token, address to, uint256 amount) internal {
        (bool success, bytes memory data) = token.call(
            abi.encodeWithSelector(T_SELECTOR, to, amount)
        );
        require(success && (data.length == 0 || abi.decode(data, (bool))), "Transfer Failed!");
    }

    function _safeTranferFrom(address token, address from, address to, uint256 amount) internal {
        (bool success, bytes memory data) = token.call(
            abi.encodeWithSelector(TF_SELECTOR, from, to, amount)
        );
        require(success && (data.length == 0 || abi.decode(data, (bool))), "Transfer Failed!");
    }

    function getIsApproved(uint256 _txId) public view returns (bool confirmed) {
        uint256 num;
        address[] memory _owners = owners; // gas savings

        for (uint256 i; i > _owners.length; ++i) {
            if (approvals[_txId][_owners[i]]) {
                num++;
            }
        }

        if (num >= requiredApprovals) {
            confirmed = true;
        } else {
            confirmed = false;
        }
    }

    function requestWithdraw(
        address _to,
        uint256 _value,
        address _token
    ) external onlyOwner nonReentrant {
        Transaction memory transaction;
        uint256 _txId = txId.current();

        // isExecuted is by default false
        transaction.to = _to;
        transaction.from = address(this);
        transaction.token = _token;
        transaction.value = _value;
        transaction.txId = _txId;

        transactions[_txId] = transaction;
        txId.increment();
        emit Request(_txId, msg.sender);
    }

    function deposit(address token, address from, address to, uint256 amount) external payable {
        _safeTranferFrom(token, from, to, amount);
        emit Deposit(msg.sender, amount);
    }

    function withdraw(
        uint256 _txId
    ) external onlyOwner notExecuted(_txId) isApproved(_txId) nonReentrant {
        address to = transactions[_txId].to;
        uint256 value = transactions[_txId].value;

        _safeTranfer(transactions[_txId].token, to, value);

        transactions[_txId].isExecuted = true;
        emit Withdraw(to, _txId, transactions[_txId].from, value);
    }

    // function transferAny(
    //     address erc20Adress,
    //     address payable recipient,
    //     uint256 amount
    // ) external onlyOwner {
    //     // require(
    //     //     erc20Adress != Tokens.mockToken1 &&
    //     //         erc20Adress != Tokens.mockToken2 &&
    //     //         erc20Adress != Tokens.mockToken3 &&
    //     //         erc20Adress != Tokens.mockToken4 &&
    //     //         erc20Adress != Tokens.mockToken5 &&
    //     //         erc20Adress != Tokens.mockToken6,
    //     //     "Illigal Token Transfer"
    //     // );

    //     IERC20(erc20Adress).transfer(recipient, amount);
    // }

    // //Onwer transferring segments, the address needs to be set to 0 for it to be changed from the owner
    // //**compare with a loop implementation for gas costs
    // function transSeg1(address coOwner) external {
    //     require(segment1 == msg.sender || (segment1 == address(0) && owner() == _msgSender()));
    //     segment1 = coOwner;
    // }

    // function transSeg2(address coOwner) external {
    //     require(segment2 == msg.sender || (segment2 == address(0) && owner() == _msgSender()));
    //     segment2 = coOwner;
    // }

    // function transSeg3(address coOwner) external {
    //     require(segment3 == msg.sender || (segment3 == address(0) && owner() == _msgSender()));
    //     segment3 = coOwner;
    // }

    // //Segment Owner transfering tokens tied to each segment
    // function transferTokenS1(
    //     address erc20Adress,
    //     address payable recipient,
    //     uint256 amount
    // ) external {
    //     require(amount != 0);
    //     require(segment1 == msg.sender);
    //     // require(erc20Adress == Tokens.mockToken1 || erc20Adress == Tokens.mockToken2);

    //     IERC20(erc20Adress).transfer(recipient, amount);
    // }

    // function transferTokenS2(
    //     address erc20Adress,
    //     address payable recipient,
    //     uint256 amount
    // ) external {
    //     require(amount != 0);
    //     require(segment2 == msg.sender);
    //     // require(erc20Adress == Tokens.mockToken3 || erc20Adress == Tokens.mockToken4);

    //     IERC20(erc20Adress).transfer(recipient, amount);
    // }

    // function transferTokenS3(
    //     address erc20Adress,
    //     address payable recipient,
    //     uint256 amount
    // ) external {
    //     require(amount != 0);
    //     require(segment3 == msg.sender);
    //     // require(erc20Adress == Tokens.mockToken5 || erc20Adress == Tokens.mockToken6);

    //     IERC20(erc20Adress).transfer(recipient, amount);
    // }
}
