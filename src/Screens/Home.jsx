import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1> Welcome to the Game</h1>
      <Row className="mt-4">
        <Col>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/singlePlayer")}
          >
            Player
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            size="lg"
            onClick={() => navigate("/multiplayer")}
          >
            Multiplayer
          </Button>
        </Col>
        <Col>
          <Button
            variant="success"
            size="lg"
            onClick={() => navigate("/score")}
          >
            Score
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
