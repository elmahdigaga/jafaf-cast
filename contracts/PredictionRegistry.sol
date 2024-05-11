pragma solidity ^0.8.0;

contract PredictionRegistry {
    struct Prediction {
        uint256 id;
        string name;
        string description;
        string content;
        uint256 created_at;
        uint256 updated_at;
        address creator;
    }

    mapping(uint256 => bytes32) public predictionHashes;
    mapping(address => bool) public isAdmin;

    event PredictionStored(uint256 indexed predictionId, bytes32 indexed hash);

    constructor() {
        isAdmin[msg.sender] = true;
    }

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admin can perform this operation");
        _;
    }

    function addAdmin(address _admin) external onlyAdmin {
        isAdmin[_admin] = true;
    }

    function removeAdmin(address _admin) external onlyAdmin {
        isAdmin[_admin] = false;
    }

    function storePredictionHash(uint256 predictionId, bytes32 hash) external onlyAdmin {
        predictionHashes[predictionId] = hash;
        emit PredictionStored(predictionId, hash);
    }
}
