import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  importImages,
  shuffleArray,
  loadImages,
  checkGameOver,
} from "../../utils/index";
import { Board, Sidebar, ModalScore } from "../index";
import { handleMemoClick } from "../../handlers/memoGameHandlers";
import "./memoGame.css";

export const MemoGame = () => {
  const { mode, size } = useParams();
  const navigate = useNavigate();
  const [shuffleMemoBlocks, setShuffleMemoBlocks] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [playerScores, setPlayerScores] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winner, setWinner] = useState("");
  const [winnerScore, setWinnerScore] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const shuffledMemoBlocks = await loadImages(
        size,
        importImages,
        shuffleArray
      );
      setShuffleMemoBlocks(shuffledMemoBlocks);
    };

    fetchImages();
  }, [size]);

  const handleBackToStart = () => {
    navigate("/");
  };

  useEffect(() => {
    if (shuffleMemoBlocks.length === 0) return;

    checkGameOver(
      shuffleMemoBlocks,
      playerScores,
      setWinner,
      setWinnerScore,
      setIsModalOpen,
      mode
    );
  }, [shuffleMemoBlocks, playerScores, mode]);

  return (
    <div className="container-flex">
      <Sidebar
        mode={mode}
        playerScores={playerScores}
        currentPlayer={currentPlayer}
        handleBackToStart={handleBackToStart}
      />
      <Board
        memoBlocks={shuffleMemoBlocks}
        animating={animating}
        handleMemoClick={(memoBlock) =>
          handleMemoClick(
            memoBlock,
            animating,
            shuffleMemoBlocks,
            setShuffleMemoBlocks,
            selectedMemoBlock,
            setSelectedMemoBlock,
            playerScores,
            currentPlayer,
            setPlayerScores,
            setAnimating,
            setCurrentPlayer
          )
        }
        gridSize={size}
      />
      <ModalScore
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          handleBackToStart();
        }}
        winner={mode !== "singleplayer" ? winner : null}
        winnerScore={mode === "singleplayer" ? playerScores[0] : winnerScore}
      />
    </div>
  );
};
