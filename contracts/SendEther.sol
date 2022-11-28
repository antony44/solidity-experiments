contract SendEther {

    function sendViaTransfer(address payable _to) public payable {
        // This function is no longer recommended for sending Ether.
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // Send returns a boolean value indicating success or failure.
        // This function is not recommended for sending Ether.
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, bytes memory data) = _to.call{value : msg.value}("");
        require(sent, "Failed to send Ether");
    }

    function sendViaTransfer1(address payable _to, uint _amount) public payable {
        // This function is no longer recommended for sending Ether.
        _to.transfer(_amount);
    }

    function sendViaSend1(address payable _to, uint _amount) public payable {
        // Send returns a boolean value indicating success or failure.
        // This function is not recommended for sending Ether.
        bool sent = _to.send(_amount);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall1(address payable _to, uint _amount) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, bytes memory data) = _to.call{value : _amount}("");
        require(sent, "Failed to send Ether");
    }

    receive() external payable {}

}