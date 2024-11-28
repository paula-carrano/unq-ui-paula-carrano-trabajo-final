import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MemoCard } from "./MemoCard";
import { images } from "../utils/imageList.js";

export const Board = ({ gridSize = 4 }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const selectImg = images.slice(0, (gridSize * gridSize) / 2);
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

  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Col xs={12 / gridSize} key={card.id} className="p-2">
            <MemoCard
              image={card.image}
              isFlipped={
                flippedCards.includes(index) || matchedCards.includes(index)
              }
              onClick={() => handleCardClick(index)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
