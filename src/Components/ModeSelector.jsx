import { Button, Container } from "react-bootstrap";

export const ModeSelector = ({ setMode }) => {
  return (
    <Container>
      <h2>Select game mode</h2>
      <Button
        variant="primary"
        className="m-2"
        onClick={() => setMode("singleplayer")}
      >
        SinglePlayer
      </Button>
      <Button
        variant="primary"
        className="m-3"
        onClick={() => setMode("multiplayer")}
      >
        Multiplayer
      </Button>
    </Container>
  );
};
