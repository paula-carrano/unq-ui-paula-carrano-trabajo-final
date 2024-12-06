// src/components/MemoGame/MemoGame.jsx
import { useEffect, useState } from "react";
import { importImages } from "../../utils/importImages";
import { Board } from "../Board/Board";

export const MemoGame = () => {
  const [shuffleMemoBlocks, setShuffleMemoBlocks] = useState([]);
  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [player1Score, setPlayer1Score] = useState(0); // Puntaje de jugador 1
  const [player2Score, setPlayer2Score] = useState(0); // Puntaje de jugador 2
  const [currentPlayer, setCurrentPlayer] = useState(1); // 1 para jugador 1, 2 para jugador 2

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = importImages();
      const images = await Promise.all(
        imageModules.map(({ resolver }) => resolver())
      );

      const shuffledImages = shuffleArray([...images, ...images]);

      setShuffleMemoBlocks(
        shuffledImages.map((image, index) => ({
          index,
          value: image.default,
          flipped: false,
        }))
      );
    };

    loadImages();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleMemoClick = (memoBlock) => {
    if (animating) return;

    const flippedMemoBlock = { ...memoBlock, flipped: true };
    const updatedMemoBlocks = [...shuffleMemoBlocks];
    updatedMemoBlocks[memoBlock.index] = flippedMemoBlock;
    setShuffleMemoBlocks(updatedMemoBlocks);

    if (!selectedMemoBlock) {
      setSelectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.value === memoBlock.value) {
      // Incrementar el puntaje del jugador actual
      if (currentPlayer === 1) {
        setPlayer1Score((prevScore) => prevScore + 1);
      } else {
        setPlayer2Score((prevScore) => prevScore + 1);
      }
      setSelectedMemoBlock(null);
      // Cambiar al siguiente jugador
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
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
        // Cambiar al siguiente jugador, incluso si no hay coincidencia
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }, 1000);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Contenedor del puntaje de los jugadores */}
      <div
        style={{
          width: "200px",
          padding: "10px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <p>Jugador 1: {player1Score}</p>
        <p>Jugador 2: {player2Score}</p>
        <p>Turno: Jugador {currentPlayer}</p>
      </div>

      <Board
        memoBlocks={shuffleMemoBlocks}
        animating={animating}
        handleMemoClick={handleMemoClick}
      />
    </div>
  );
};
