import React from "react";

type WinnerPopupProps = {
  winner: string | null;
  onReset: () => void;
};

const WinnerPopup: React.FC<WinnerPopupProps> = ({ winner, onReset }) => {
  if (!winner) return null; // Hide if no winner

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white text-center p-8 rounded-lg shadow-2xl w-[300px] md:w-[400px] animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800">
          {winner === "Draw" ? "🤝 It's a Draw!" : `🏆 Winner: ${winner} 🎉`}
        </h2>
        <button
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg 
          hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
          onClick={onReset}
        >
          🔄 Play Again
        </button>
      </div>
    </div>
  );
};

export default WinnerPopup;
