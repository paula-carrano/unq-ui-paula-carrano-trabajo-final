import { Card } from "react-bootstrap";
import backNaipe from "../assets/img/backNaipe.png";
import "../styles/MemoCard.css";

export const MemoCard = ({ image, isFlipped, onClick, cardSize }) => {
  return (
    <Card
      onClick={onClick}
      className="cardContainer"
      style={{
        width: `${cardSize}%`, // Ajustamos el ancho de la carta
        height: `${cardSize}%`, // Ajustamos la altura de la carta
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card.Img
        src={isFlipped ? image : backNaipe}
        alt="Card"
        className="cardImg"
        style={{
          width: "100%", // La imagen ocupará todo el espacio disponible de la carta
          height: "100%",
          objectFit: "cover", // Asegura que la imagen cubra todo el espacio de la carta
        }}
      />
    </Card>
  );
};
