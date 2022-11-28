// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Vault {
    
    event Deposit(address sender, uint256 amount);
    event Withdrawal(address receiver, uint256 amount);

    mapping(address => uint256) balances;

    function deposit(address _addr) public payable {
        balances[_addr] += msg.value; // Записываем сумму перечисленного в методе эфира msg.value под адресом _addr в маппингетbalances
        emit Deposit(_addr, msg.value); //  Кидаем ивент с заполненными данными
    }

    function balanceOf(address _addr) public view returns (uint256 balance) {
        return balances[_addr]; // Проверяем сумму эфиров которая сохранена в мапинге под адресом _addr
    }

    function withdraw(uint256 _amount) public returns (bool success) {
        require(
            balances[msg.sender] >= _amount, // Должно соблюдаться условие
            "No enough Ether on the account!" // Иначе вывод сообщения
        );
        balances[msg.sender] -= _amount; // Уменьшаем баланс по адресу msg.sender
        payable(msg.sender).transfer(_amount); // Переводим эфиры на адрес msg.sender с текущего с адреса сейфа.
        emit Withdrawal(msg.sender, _amount); //  Кидаем ивент с заполненными данными
        return true;
    }

    receive() external payable {
        deposit(msg.sender); // Если кто-то просто послал эфир на контракт вызываем функцию с его адресом
    }

    fallback() external payable {
        revert("Money doesn't accepted!");
    }
}
