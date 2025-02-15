import React from "react";

type ScoreboardProps = {
  scores: { X: number; O: number };
};

const Scoreboard: React.FC<ScoreboardProps> = ({ scores }) => {
  return (
    <div className="flex justify-center my-4">
      <h2 className="text-xl font-bold mx-4">X: {scores.X}</h2>
      <h2 className="text-xl font-bold mx-4">O: {scores.O}</h2>
    </div>
  );
};

export default Scoreboard;
