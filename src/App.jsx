import "./App.css";
import { useEffect, useState } from "react";
import { Board } from "./components/Board/Board";

const App = () => {
  const [shuffleMemoBlocks, setShuffleMemoBlocks] = useState([]);
  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const numbersList = Array.from({ length: 6 }, (_, i) => i + 1); // Crea una lista de números del 1 al 6 y duplicarla
    const shuffledNumbers = shuffleArray([...numbersList, ...numbersList]); // Duplica y mezcla
    setShuffleMemoBlocks(
      shuffledNumbers.map((number, index) => ({
        index,
        value: number,
        flipped: false,
      }))
    );
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
      }, 1000);
    }
  };

  return (
    <Board
      memoBlocks={shuffleMemoBlocks}
      animating={animating}
      handleMemoClick={handleMemoClick}
    />
  );
};

export default App;
