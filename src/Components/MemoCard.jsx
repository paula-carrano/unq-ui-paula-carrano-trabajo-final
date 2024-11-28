import { Card } from "react-bootstrap";
import backNaipe from "../assets/img/backNaipe.png";
import "../styles/MemoCard.css";

export const MemoCard = ({ image, isFlipped, onClick }) => {
  return (
    <Card onClick={onClick} className="cardContainer">
      <Card.Img
        src={isFlipped ? image : backNaipe}
        alt="Card"
        className="cardImg"
      />
    </Card>
  );
};
