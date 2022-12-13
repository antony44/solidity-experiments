pragma solidity ^0.8.10;

contract Payments {

    struct Payment {
        uint amount;
        uint timestamp;
        address from;
        string message;
    }

    struct Balance {
        uint totalPaymentsCount;
        mapping(uint => Payment) payments;
    }

    mapping(address => Balance) public balances;

    function getCurrentBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getPayment(address _address, uint _index) public view returns (Payment memory) {
        return balances[_address].payments[_index];
    }

    function pay(string memory message) public payable {
        uint paymentNum = balances[msg.sender].totalPaymentsCount;
        balances[msg.sender].totalPaymentsCount++;

        Payment memory newPayment = Payment(
            msg.value,
            block.timestamp,
            msg.sender,
            message
        );

        balances[msg.sender].payments[paymentNum] = newPayment;
    }
}
