import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MemoCard } from "./MemoCard";
import { images } from "../utils/imageList.js";

export const Board = ({ gridSize }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const numCards = gridSize * gridSize;
    const selectImg = images.slice(0, numCards / 2);
    const shuffledCards = [...selectImg, ...selectImg]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
      }));
    setCards(shuffledCards);
  }, [gridSize]);

  const handleCardClick = (cardId) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(cardId) &&
      !matchedCards.includes(cardId)
    ) {
      const newFlippedCards = [...flippedCards, cardId];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        const [firstId, secondId] = newFlippedCards;
        if (cards[firstId].image === cards[secondId].image) {
          setMatchedCards([...matchedCards, firstId, secondId]);
        }
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const rows = [];
  for (let i = 0; i < gridSize; i++) {
    rows.push(cards.slice(i * gridSize, (i + 1) * gridSize));
  }

  const cardSize = 100 / gridSize; // Esto hace que las cartas sean más pequeñas a medida que aumenta el gridSize

  return (
    <Container>
      {rows.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          className="g-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {row.map((card) => (
            <Col
              xs={12 / gridSize}
              md={12 / gridSize}
              key={card.id}
              className="p-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <MemoCard
                image={card.image}
                isFlipped={
                  flippedCards.includes(card.id) ||
                  matchedCards.includes(card.id)
                }
                onClick={() => handleCardClick(card.id)}
                cardSize={cardSize} // Pasamos el tamaño calculado como prop
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};
