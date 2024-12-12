export const checkGameOver = (
  shuffleMemoBlocks,
  playerScores,
  setWinner,
  setWinnerScore,
  setIsModalOpen,
  mode
) => {
  const allFlipped = shuffleMemoBlocks.every((block) => block.flipped);

  if (allFlipped) {
    const gameResult = {
      singleplayer: {
        winner: "",
        winnerScore: playerScores[0]+playerScores[1],
      },
      multiplayer: {
        winner: playerScores[0] > playerScores[1] ? "Player 1" : "Player 2",
        winnerScore: playerScores[0] > playerScores[1] ? playerScores[0] : playerScores[1],
      },
    };

    if (gameResult[mode]) {
      const { winner, winnerScore } = gameResult[mode];
      setWinner(winner);
      setWinnerScore(winnerScore);
      setIsModalOpen(true);
    } else {
      console.error(`Invalid mode: ${mode}`);
    }
  }
};
