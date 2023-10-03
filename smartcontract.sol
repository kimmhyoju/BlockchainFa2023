// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatternStorage {
    mapping(bytes1 => string) public patterns;
    address public owner;

    event PatternSubmitted(bytes1 indexed letter, string pattern);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function submitPattern(bytes1 letter, string memory pattern) external onlyOwner {
        require(bytes(pattern).length > 0, "Pattern cannot be empty");
        patterns[letter] = pattern;
        emit PatternSubmitted(letter, pattern);
    }

    function getPattern(bytes1 letter) external view returns (string memory) {
        return patterns[letter];
    }
}
