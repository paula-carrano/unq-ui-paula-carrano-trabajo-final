import React from "react";
import "./sideBar.css";

export const Sidebar = ({
  mode,
  playerScores,
  currentPlayer,
  handleBackToStart,
}) => {
  return (
    <div className="container-sidebar">
      <p>
        {mode === "multiplayer"
          ? `Player 1: ${playerScores[0]}`
          : `Player: ${playerScores[0]}`}
      </p>
      {mode === "multiplayer" && <p>Player 2: {playerScores[1]}</p>}
      <p>
        Turn:{" "}
        {mode === "multiplayer" ? `Player ${currentPlayer + 1}` : "Player"}
      </p>
      <button onClick={handleBackToStart}>Back to Start</button>
    </div>
  );
};
