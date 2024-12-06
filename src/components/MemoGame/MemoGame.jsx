import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { importImages } from "../../utils/importImages";
import { Board } from "../Board/Board";
import { Sidebar } from "../Sidebar/Sidebar";
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
    const loadImages = async () => {
      const imageModules = importImages();
      const images = await Promise.all(
        imageModules.map(({ resolver }) => resolver())
      );

      // Calcula el número total de bloques (size * size)
      const totalBlocks = size * size;
      const selectedImages = images.slice(0, totalBlocks / 2);

      const shuffledImages = shuffleArray([
        ...selectedImages,
        ...selectedImages,
      ]);

      setShuffleMemoBlocks(
        shuffledImages.map((image, index) => ({
          index,
          value: image.default,
          flipped: false,
        }))
      );
    };

    loadImages();
  }, [size]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleMemoClick = (memoBlock) => {
    if (animating || memoBlock.flipped) return;

    const flippedMemoBlock = { ...memoBlock, flipped: true };
    const updatedMemoBlocks = [...shuffleMemoBlocks];
    updatedMemoBlocks[memoBlock.index] = flippedMemoBlock;
    setShuffleMemoBlocks(updatedMemoBlocks);

    if (!selectedMemoBlock) {
      setSelectedMemoBlock(memoBlock);
    } else if (
      selectedMemoBlock &&
      selectedMemoBlock.value === memoBlock.value
    ) {
      const newScores = [...playerScores];
      newScores[currentPlayer] += 1;
      setPlayerScores(newScores);
      setSelectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        updatedMemoBlocks[memoBlock.index] = { ...memoBlock, flipped: false };
        updatedMemoBlocks[selectedMemoBlock.index] = {
          ...selectedMemoBlock,
          flipped: false,
        };
        setShuffleMemoBlocks(updatedMemoBlocks);
        setSelectedMemoBlock(null);
        setAnimating(false);

        // Cambiar turno después de un intento fallido
        setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
      }, 1000);
      return;
    }

    // Si encontró una pareja, no cambia el turno, solo se espera a que termine el movimiento
    if (selectedMemoBlock && selectedMemoBlock.value !== memoBlock.value) {
      setCurrentPlayer((prev) => (prev === 0 ? 1 : 0)); // Cambiar turno
    }
  };

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
        handleMemoClick={handleMemoClick}
        gridSize={size}
      />
    </div>
  );
};
