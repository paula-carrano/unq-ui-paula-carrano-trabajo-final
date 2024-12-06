export const handleMemoClick = (
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
  ) => {
    if (animating || memoBlock.flipped) return;
  
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    const updatedMemoBlocks = [...shuffleMemoBlocks];
    updatedMemoBlocks[memoBlock.index] = flippedMemoBlock;
    setShuffleMemoBlocks(updatedMemoBlocks);
  
    if (!selectedMemoBlock) {
      setSelectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock && selectedMemoBlock.value === memoBlock.value) {
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
  
        setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
      }, 1000);
      return;
    }
  
    if (selectedMemoBlock && selectedMemoBlock.value !== memoBlock.value) {
      setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
    }
  };
  