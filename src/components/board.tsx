import React from "react";
import Square from "./square";

type BoardProps = {
  squares: string[];
  onClick: (index: number) => void;
  winningCombination: number[]; // Receive winning squares
};

const Board: React.FC<BoardProps> = ({ squares, onClick, winningCombination  }) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-64 mx-auto">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinningSquare={winningCombination.includes(index)} // Highlight winning squares
        />
      ))}
    </div>
  );
};

export default Board;
