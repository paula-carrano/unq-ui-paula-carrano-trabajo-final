import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const BoardOptions = () => {
  const { mode } = useParams(); // Recupera el modo de juego (singleplayer o multiplayer)
  const [boardSize, setBoardSize] = useState(null); // Estado para el tamaño del tablero

  const handleBoardSize = (size) => {
    const [rows, cols] = size.split("x").map(Number); // Divide el tamaño y convierte a números
    setBoardSize({ rows, cols }); // Guarda las dimensiones del tablero
  };

  const renderBoard = () => {
    if (!boardSize) return null; // Si no hay tablero seleccionado, no muestra nada

    const { rows, cols } = boardSize;
    const cards = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(
          <div
            key={`${i}-${j}`}
            className="card bg-light text-center"
            style={{
              width: "80px",
              height: "80px",
              lineHeight: "80px",
              border: "1px solid #ccc",
              display: "inline-block", // Asegura que se muestren lado a lado
              margin: "5px",
            }}
          >
            {i},{j}
          </div>
        );
      }
      cards.push(
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {row}
        </div>
      );
    }

    return <Container>{cards}</Container>;
  };

  return (
    <Container className="text-center mt-5">
      <h1>Choose your Board Size</h1>
      <p>
        Mode:{" "}
        <strong>
          {mode === "singleplayer" ? "Single Player" : "Multiplayer"}
        </strong>
      </p>
      <Row className="mt-4">
        <Col>
          <Button
            variant="info"
            size="lg"
            onClick={() => handleBoardSize("4x4")}
          >
            4x4
          </Button>
        </Col>
        <Col>
          <Button
            variant="info"
            size="lg"
            onClick={() => handleBoardSize("5x5")}
          >
            5x5
          </Button>
        </Col>
        <Col>
          <Button
            variant="info"
            size="lg"
            onClick={() => handleBoardSize("6x6")}
          >
            6x6
          </Button>
        </Col>
      </Row>
      <div className="mt-4">{renderBoard()}</div>
    </Container>
  );
};
