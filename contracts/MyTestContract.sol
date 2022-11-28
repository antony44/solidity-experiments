pragma solidity ^0.7.0;

contract Token {
    string private _name = "Default Token Name";
    string private _symbol = "DTN";
    uint8 private _decimals = 0;

    // The fixed amount of tokens stored in an unsigned integer type variable.
    uint256 public _totalSupply = 10000;

    // An address type variable is used to store ethereum accounts.
    address public _owner;

    // A mapping is a key/value map. Here we store each account balance.
    mapping(address => uint256) _balances;

    // "sender" allowes "spender" to spend "amount" of tokens: _allowances[sender][spender] = amount;
    mapping(address => mapping(address => uint256)) private _allowances;

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 totalSupply
    ) {
        // The totalSupply is assigned to transaction sender, which is the account
        // that is deploying the contract.
        _name = name;
        _symbol = symbol;
        _decimals = decimals;
        _totalSupply = totalSupply;
        _balances[msg.sender] = totalSupply;
        _owner = msg.sender;
    }

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Burn(address indexed burningAddress, uint256 value);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    function balanceOf(address account) external view returns (uint256) {
        return _balances[account];
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function mint(address account, uint256 amount) public {
        require(account != address(0), "ERC20: mint to the zero address");
        require(msg.sender == _owner, "Should be owner!");

        _totalSupply = _totalSupply + amount;
        _balances[account] = _balances[account] + amount;
    }

    function burn(address account, uint256 value) public {
        require(account != address(0), "ERC20: burn from the zero address");

        _totalSupply = _totalSupply - value;
        _balances[account] = _balances[account] - value;

        emit Burn(account, value);
    }

    function approve(address spender, uint256 value) public {
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[msg.sender][spender] = value;

        emit Approval(msg.sender, spender, value);
    }

    function transfer(address to, uint256 amount) external {
        require(_balances[msg.sender] >= amount, "Not enough tokens");

        // Transfer the amount.
        _balances[msg.sender] -= amount;
        _balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public returns (bool) {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(_allowances[sender][msg.sender] >= amount, "Not allowed!");

        _balances[sender] = _balances[sender] - amount;
        _balances[recipient] = _balances[recipient] + amount;
        emit Transfer(sender, recipient, amount);

        _allowances[sender][msg.sender] =
            _allowances[sender][msg.sender] -
            amount;

        return true;
    }
}
