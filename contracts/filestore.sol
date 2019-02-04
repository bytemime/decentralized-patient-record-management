pragma solidity 0.4.25;

contract fileStore {
    struct userData {
        string ipfsHash;
        address user;
        uint timestamp;
    }
    
    mapping (address => userData) users;
    
    function setHash(string memory _str) public {
        users[msg.sender].ipfsHash = _str;
        users[msg.sender].timestamp = now;
        
    }
    
    function getHash() public view returns(string memory) {
        return users[msg.sender].ipfsHash;
    }
}
