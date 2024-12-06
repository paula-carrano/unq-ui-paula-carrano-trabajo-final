import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { importImages } from "../../utils/importImages";
import { Board } from "../Board/Board";

export const MemoGame = () => {
  const { mode, size } = useParams(); // Obtén el modo y tamaño del tablero de la URL
  const navigate = useNavigate();
  const [shuffleMemoBlocks, setShuffleMemoBlocks] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [playerScores, setPlayerScores] = useState([0, 0]); // Para dos jugadores
  const [currentPlayer, setCurrentPlayer] = useState(0);

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
    if (animating || memoBlock.flipped) return; // No hacer nada si está animando o ya está volteada

    const flippedMemoBlock = { ...memoBlock, flipped: true };
    const updatedMemoBlocks = [...shuffleMemoBlocks];
    updatedMemoBlocks[memoBlock.index] = flippedMemoBlock;
    setShuffleMemoBlocks(updatedMemoBlocks);

    if (!selectedMemoBlock) {
      setSelectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.value === memoBlock.value) {
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
    if (selectedMemoBlock.value !== memoBlock.value) {
      setCurrentPlayer((prev) => (prev === 0 ? 1 : 0)); // Cambiar turno
    }
  };

  const handleBackToStart = () => {
    navigate("/");
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "200px", padding: "10px", textAlign: "center" }}>
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

      <Board
        memoBlocks={shuffleMemoBlocks}
        animating={animating}
        handleMemoClick={handleMemoClick}
        gridSize={size}
      />
    </div>
  );
};
