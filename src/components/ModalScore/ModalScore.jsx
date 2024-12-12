import React from "react";
import Modal from "react-modal";
import "./modalScore.css";

// Establecer el elemento de la aplicación para mejorar la accesibilidad
Modal.setAppElement("#root");

export const ModalScore = ({ isOpen, onClose, winner, winnerScore, mode }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div className="modal-content">
        <h2 id="modalTitle">
          {mode === "singleplayer"
            ? "Game Over!"
            : winner === "It's a tie!"
            ? "It's a Tie!"
            : "Winner!"}
        </h2>
        <p id="modalDescription">
          {mode === "singleplayer" ? (
            <span>Your score: {winnerScore}</span>
          ) : winner === "It's a tie!" ? (
            <span> {winnerScore} points for each player!</span>
          ) : (
            <span>
              <strong>{winner}</strong> wins with <strong>{winnerScore}</strong>{" "}
              points!
            </span>
          )}
        </p>
        <button onClick={onClose}>Back to Start</button>
      </div>
    </Modal>
  );
};
