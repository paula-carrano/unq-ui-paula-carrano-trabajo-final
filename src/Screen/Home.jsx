import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Board } from "../Components/Board";
import { ModeSelector } from "../Components/ModeSelector";

export const Home = () => {
  const [mode, setMode] = useState(null); // Para guardar el modo de juego
  const [gameOver, setGameOver] = useState(false); // Para indicar si el juego terminó
  const [playerScores, setPlayerScores] = useState({ player1: 0, player2: 0 }); // Para los puntajes de los jugadores
  const [currentPlayer, setCurrentPlayer] = useState("player1"); // Para saber quién está jugando
  const [gridSize, setGridSize] = useState(4); // Estado para el tamaño del tablero

  // Función para manejar el fin del juego
  const handlerGameOver = () => {
    setGameOver(true);
  };

  // Función para reiniciar el juego
  const resetGame = () => {
    setGameOver(false);
    setPlayerScores({ player1: 0, player2: 0 });
    setCurrentPlayer("player1");
    setMode(null);
    setGridSize(4); // Resetear tamaño de tablero a 4x4
  };

  // Función para actualizar el puntaje del jugador
  const handleScoreUpdate = (player) => {
    setPlayerScores((prevScores) => ({
      ...prevScores,
      [player]: prevScores[player] + 1,
    }));
  };

  // Función para cambiar de jugador
  const handlePlayerSwitch = () => {
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === "player1" ? "player2" : "player1"
    );
  };

  // Función para cambiar el tamaño del tablero
  const handleGridSizeChange = (e) => {
    setGridSize(Number(e.target.value));
  };

  return (
    <Container className="text-center mt-5">
      <h1>Memory Game</h1>

      {/* Selector de tamaño de tablero */}
      <div className="mb-3">
        <Form.Group>
          <Form.Label>Select Board Size</Form.Label>
          <Form.Control
            as="select"
            value={gridSize}
            onChange={handleGridSizeChange}
          >
            <option value={4}>4x4</option>
            <option value={5}>5x5</option>
            <option value={6}>6x6</option>
          </Form.Control>
        </Form.Group>
      </div>

      {/* Selector de modo de juego */}
      {!mode && <ModeSelector setMode={setMode} />}

      {mode && !gameOver && (
        <div>
          {mode === "multiplayer" && (
            <div className="mb-3">
              <h2>
                Current Turn: <strong>{currentPlayer}</strong>
              </h2>
              <h3>
                Player 1: {playerScores.player1} | Player 2:{" "}
                {playerScores.player2}
              </h3>
            </div>
          )}
          <Board
            gridSize={gridSize}
            mode={mode}
            currentPlayer={currentPlayer}
            onGameOver={handlerGameOver}
            onScoreUpdate={handleScoreUpdate}
            onPlayerSwitch={handlePlayerSwitch}
          />
        </div>
      )}

      {gameOver && (
        <div className="mt-4">
          <h2>Game Over!</h2>
          {mode === "multiplayer" && (
            <h3>
              Winner:{" "}
              {playerScores.player1 === playerScores.player2
                ? "It's a Tie!"
                : playerScores.player1 > playerScores.player2
                ? "Player 1"
                : "Player 2"}
            </h3>
          )}
          <Button onClick={resetGame} variant="primary">
            Play Again
          </Button>
        </div>
      )}
    </Container>
  );
};
