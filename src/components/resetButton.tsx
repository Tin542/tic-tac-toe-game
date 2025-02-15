import React from "react";

type ResetButtonProps = {
  onReset: () => void;
};

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded"
      onClick={onReset}
    >
      Restart Game
    </button>
  );
};

export default ResetButton;
