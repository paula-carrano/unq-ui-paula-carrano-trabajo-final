import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { importImages, shuffleArray, loadImages } from "../../utils/index";
import { Board, Sidebar } from "../index";
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
    </div>
  );
};
