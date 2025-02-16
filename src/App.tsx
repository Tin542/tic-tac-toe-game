import React from "react";
import Board from "./components/board";
import Scoreboard from "./components/scoreBoard";
import ResetButton from "./components/resetButton";
import { useTicTacToe } from "./hooks/useTicTacToe";
import WinnerPopup from "./components/winnerPopup";

const App: React.FC = () => {
  const { squares, winner, scores, winningCombination, handleClick, resetGame } = useTicTacToe();

  return (
    <div className="flex flex-col items-center min-h-screen bg-black p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">🎉 Tic-Tac-Toe 🎉</h1>
      <Scoreboard scores={scores} />
      <Board squares={squares} onClick={handleClick} winningCombination={winningCombination} />
      <WinnerPopup winner={winner} onReset={resetGame} />
      <ResetButton onReset={resetGame} />
    </div>
  );
};

export default App;
