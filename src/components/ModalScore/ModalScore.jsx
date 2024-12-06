// ModalScore Component
import React from "react";
import Modal from "react-modal";

import "./modalScore.css";

Modal.setAppElement("#root");

export const ModalScore = ({ isOpen, onClose, winner, winnerScore, mode }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="modal-content">
        <h2>{mode === "singleplayer" ? "Game Over!" : "Winner!"}</h2>
        {mode === "singleplayer" ? (
          <p>Your score: {winnerScore}</p>
        ) : (
          <p>
            {winner} wins with {winnerScore} points!
          </p>
        )}
        <button onClick={onClose}>Back to Start</button>
      </div>
    </Modal>
  );
};
