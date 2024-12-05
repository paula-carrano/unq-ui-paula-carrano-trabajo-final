import "./App.css";
import { useEffect, useState } from "react";
import { Board } from "./components/Board/Board";
const lettersList = ["A", "B", "C", " D", "E", " F"];

const App = () => {
  const [shuffleMemoBlocks, setShuffleMemoBlocks] = useState([]);
  const [selectMemoBlock, setSelectMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const shuffleLetterList = shuffleArray([...lettersList, ...lettersList]); // Concatenar las listas
    setShuffleMemoBlocks(
      shuffleLetterList.map((l, i) => ({ index: i, l, flipped: false }))
    );
  }, []);

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleMemoClick = (memoBlock) => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffleMemoBlockCopy = [...shuffleMemoBlocks];
    shuffleMemoBlockCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffleMemoBlocks(shuffleMemoBlockCopy);
    if (selectMemoBlock === null) {
      setSelectMemoBlock(memoBlock);
    } else if (selectMemoBlock.l === memoBlock.l) {
      setSelectMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffleMemoBlockCopy.splice(memoBlock.index, 1, memoBlock);
        shuffleMemoBlockCopy.splice(selectMemoBlock.index, 1, selectMemoBlock);
        setShuffleMemoBlocks(shuffleArrayCopy);
        setSelectMemoBlock(null);
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
