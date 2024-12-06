// Función principal que maneja el clic en un bloque de memoria
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

  // Actualiza el bloque seleccionado
  const updatedMemoBlocks = updateMemoBlock(memoBlock, shuffleMemoBlocks, setShuffleMemoBlocks);

  // Si no hay bloque seleccionado, selecciona este bloque
  if (!selectedMemoBlock) {
    setSelectedMemoBlock(memoBlock);
    return;
  }

  // Si los bloques seleccionados son iguales, suma puntos y resetea selección
  if (selectedMemoBlock.value === memoBlock.value) {
    handleMatch(selectedMemoBlock, memoBlock, playerScores, currentPlayer, setPlayerScores, setSelectedMemoBlock);
    
    return;
  }

  // Si los bloques no coinciden, inicia animación para darlos vuelta de nuevo
  handleMismatch(memoBlock, selectedMemoBlock, updatedMemoBlocks, shuffleMemoBlocks, setShuffleMemoBlocks, setSelectedMemoBlock, setAnimating, setCurrentPlayer);
};

// Función que actualiza el estado de un bloque de memoria, marcándolo como volteado
const updateMemoBlock = (memoBlock, shuffleMemoBlocks, setShuffleMemoBlocks) => {
  const flippedMemoBlock = { ...memoBlock, flipped: true };
  const updatedMemoBlocks = [...shuffleMemoBlocks];
  updatedMemoBlocks[memoBlock.index] = flippedMemoBlock;
  setShuffleMemoBlocks(updatedMemoBlocks);
  return updatedMemoBlocks;
};

// Función que maneja el caso cuando los bloques coinciden
const handleMatch = (
  selectedMemoBlock,
  memoBlock,
  playerScores,
  currentPlayer,
  setPlayerScores,
  setSelectedMemoBlock
) => {
  const newScores = [...playerScores];
  newScores[currentPlayer] += 1;
  setPlayerScores(newScores);
  setSelectedMemoBlock(null);
};

// Función que maneja el caso cuando los bloques no coinciden
const handleMismatch = (
  memoBlock,
  selectedMemoBlock,
  updatedMemoBlocks,
  shuffleMemoBlocks,
  setShuffleMemoBlocks,
  setSelectedMemoBlock,
  setAnimating,
  setCurrentPlayer
) => {
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

    // Cambia de jugador
    setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
  }, 1000);
};
