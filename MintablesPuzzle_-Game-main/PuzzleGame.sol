// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PuzzleGame is ERC721Enumerable, Ownable {
    uint256 public constant PUZZLE_SIZE = 3; // Adjust this value based on your puzzle size
    uint256 public constant PUZZLE_DIFFICULTY = 15; // Adjust this value for the difficulty level

    struct Puzzle {
        string name;
        string imageUrl;
        address solver;
    }

    Puzzle[] private puzzles;
    mapping(uint256 => bool) private solvedPuzzles;

    event PuzzleSolved(uint256 indexed tokenId, address indexed solver);

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {}

    function createPuzzle(
        string memory name,
        string memory imageUrl
    ) external onlyOwner {
        uint256 puzzleId = puzzles.length;
        puzzles.push(Puzzle(name, imageUrl, address(0)));
        _mint(address(this), puzzleId);
    }

    function solvePuzzle(uint256 puzzleId) external {
        require(_exists(puzzleId), "Puzzle does not exist");
        require(!_isPuzzleSolved(puzzleId), "Puzzle already solved");

        // Validate puzzle-solving logic here (not implemented in this example)

        // Mint NFT for the solver
        _mint(msg.sender, puzzleId);
        solvedPuzzles[puzzleId] = true;
        puzzles[puzzleId].solver = msg.sender;
        emit PuzzleSolved(puzzleId, msg.sender);
    }

    function getPuzzle(
        uint256 puzzleId
    )
        external
        view
        returns (string memory name, string memory imageUrl, address solver)
    {
        require(_exists(puzzleId), "Puzzle does not exist");
        Puzzle memory puzzle = puzzles[puzzleId];
        return (puzzle.name, puzzle.imageUrl, puzzle.solver);
    }

    function isPuzzleSolved(uint256 puzzleId) external view returns (bool) {
        return _isPuzzleSolved(puzzleId);
    }

    function _isPuzzleSolved(uint256 puzzleId) private view returns (bool) {
        return solvedPuzzles[puzzleId];
    }
}
