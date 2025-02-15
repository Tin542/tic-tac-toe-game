import React from "react";

type SquareProps = {
  value: string;
  onClick: () => void;
  isWinningSquare: boolean; // highlighting winning squares
};

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare  }) => {
  return (
    <button
      className={`
        w-20 h-20 border-4 font-bold text-4xl flex items-center justify-center 
        transition-all duration-300
        ${value === "X" ? "text-red-500" : value === "O" ? "text-blue-500" : ""}
        ${isWinningSquare ? "bg-white scale-110" : "hover:bg-gray-200"}
      `}
      onClick={onClick}
      disabled={value !== ""}
    >
      {value}
    </button>
  );
};

export default Square;
