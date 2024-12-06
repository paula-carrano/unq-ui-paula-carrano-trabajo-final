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
        <strong>{mode === "multiplayer" ? "Player 1: " : "Score: "}</strong>
        {playerScores[0]}
      </p>
      {mode === "multiplayer" && (
        <p>
          <strong>Player 2: </strong>
          {playerScores[1]}
        </p>
      )}
      {mode === "multiplayer" && (
        <p>
          <strong>Turn: </strong>
          {`Player ${currentPlayer + 1}`}
        </p>
      )}
      <button onClick={handleBackToStart}>Back to Start</button>
    </div>
  );
};
