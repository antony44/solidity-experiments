// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ReceiveEther {
    /*
    Which function is called, fallback() or receive()?

           send Ether
               |
         msg.data is empty?
              / \
            yes  no
            /     \
receive() exists?  fallback()
         /   \
        yes   no
        /      \
    receive()   fallback()
    */
    uint public vali;

    // Function to receive Ether. msg.data must be empty
    receive() external payable {

    }

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getBalanceOfAddress(address adr) public view returns (uint) {
        return adr.balance;
    }

    function sendViaTransfer(address payable _to) public payable {
        // This function is no longer recommended for sending Ether.
        _to.transfer(msg.value);
    }

    function testPayableFunction() public payable {
        // This function is no longer recommended for sending Ether.
        // _to.transfer(msg.value);
    }


}