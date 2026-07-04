import { useState } from "react";
import { Trophy, Play, Link2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { PlayerNameModal } from "../components";
import { savePlayerName } from "../service/storage";

export const Home = () => {
    const navigate = useNavigate();
    const [showPlayerModal, setShowPlayerModal] = useState(false);

    const handlePlayerConfirm = (playerName) => {
        savePlayerName(playerName);
        setShowPlayerModal(false);
        navigate("/game");
    };

    return (
        <div className="page-fill d-flex align-items-center justify-content-center">
            <Container fluid className="px-0">
                <Row className="justify-content-center">
                    <Col xs={12} sm={9} md={6} lg={4} xl={3}>
                        <Stack
                            gap={4}
                            className="align-items-center text-center mx-auto"
                        >
                            <Link2
                                size={52}
                                strokeWidth={3}
                                aria-hidden="true"
                                style={{ color: "#008ca5" }}
                            />

                            <div>
                                <h1 className="mb-3 text-uppercase fw-bold lh-sm fs-3 text-dark">
                                    Palabras
                                    <br />
                                    encadenadas
                                </h1>
                                <p className="mb-0 text-secondary">
                                    Forma la cadena mas larga de palabras
                                    <br className="d-none d-sm-block" />
                                    antes de que se acabe el tiempo.
                                </p>
                            </div>

                            <Stack gap={3} className="w-100">
                                <Button
                                    type="button"
                                    size="lg"
                                    className="border-0 fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #08abc6 0%, #0492d9 100%)",
                                    }}
                                    onClick={() => setShowPlayerModal(true)}
                                >
                                    <Play size={22} fill="currentColor" />
                                    Jugar
                                </Button>

                                <Button
                                    as={Link}
                                    to="/leaderboard"
                                    variant="outline-primary"
                                    size="lg"
                                    className=" fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                                >
                                    <Trophy size={20} />
                                    Ver puntajes
                                </Button>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <PlayerNameModal
                show={showPlayerModal}
                onCancel={() => setShowPlayerModal(false)}
                onConfirm={handlePlayerConfirm}
            />
        </div>
    );
};
