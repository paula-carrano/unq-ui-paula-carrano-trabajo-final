import { Container } from "react-bootstrap";

export const Score = () => {
  const lastScore = localStorage.getItem("lastScore") || 0;

  return (
    <Container className="text-center mt-5">
      <h1>Last Score</h1>
      <p>{lastScore}</p>
    </Container>
  );
};
