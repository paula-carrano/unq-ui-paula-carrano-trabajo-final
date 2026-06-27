import { Frown, RefreshCcw, Trophy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button, Card, Container, Stack } from "react-bootstrap";

export const GameOver = () => {
    const { state } = useLocation();
    const score = state?.score ?? 0;
    const wordCount = state?.wordCount ?? 0;

    return (
        <Container>
            <Card style={{ width: "18rem" }}>
                <Frown size={100} />
                <Card.Body>
                    <Card.Title>Perdiste</Card.Title>

                    <p>Palabras: {wordCount}</p>
                    <p>Puntaje: {score}</p>
                    <Stack gap={3} className="w-100">
                        <Button
                            as={Link}
                            to="/game"
                            size="lg"
                            className="border-0 fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                            style={{
                                background:
                                    "linear-gradient(90deg, #08abc6 0%, #0492d9 100%)",
                            }}
                        >
                            <RefreshCcw size={20} />
                            Jugar
                        </Button>
                        <Button
                            as={Link}
                            to="/leaderboard"
                            variant="outline-secondary"
                            size="lg"
                            className=" fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                        >
                            <Trophy size={20} />
                            Ver puntajes
                        </Button>
                    </Stack>
                </Card.Body>
            </Card>
        </Container>
    );
};
