import { useState } from "react";

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
  [0, 4, 8], [2, 4, 6] // Cross
];

export const useTicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill("")); // State of 9 squares (X, O, empty)
  const [xIsNext, setXIsNext] = useState(true); // X go first 
  const [winner, setWinner] = useState<string | null>(null); // Store winner
  const [scores, setScores] = useState({ X: 0, O: 0 }); // store scoce of winner
  const [winningCombination, setWinningCombination] = useState<number[]>([]); // state for winning squares

  const checkWinner = (newSquares: string[]) => {

    // loop through the winning combinations to check if there is a winner
    for (const [a, b, c] of WINNING_COMBINATIONS) {

      // Check if the squares have the same value and not empty
      if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        setWinningCombination([a, b, c]); // Store winning squares
        return newSquares[a];
      }
    }
    return newSquares.includes("") ? null : "Draw";
  };

  const handleClick = (index: number) => {
    if (squares[index] || winner) return; // if square is already filled or game is over, return

    const newSquares = [...squares]; // Copy the current squares
    newSquares[index] = xIsNext ? "X" : "O"; // check who's turn and fill the square

    // Check if there is a winner
    const gameWinner = checkWinner(newSquares);

    // Update the winner and scores
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner !== "Draw") {

        // Update the scores
        setScores((prev) => ({ ...prev, [gameWinner as 'X' | 'O']: prev[gameWinner as 'X' | 'O'] + 1 }));
      }
    }

    setSquares(newSquares); // Update the squares
    setXIsNext(!xIsNext); // Change the turn
  };

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setWinner(null);
    setWinningCombination([]); 
    setXIsNext(true);
  };

  return { squares, winner, scores, handleClick, resetGame, winningCombination };
};
