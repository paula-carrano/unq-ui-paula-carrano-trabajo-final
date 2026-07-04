import { Frown, RefreshCcw, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";

export const GameOverModal = ({ show, score, wordCount, onPlayAgain }) => {
    return (
        <Modal show={show} centered backdrop="static" keyboard={false}>
            <Modal.Body className="text-center p-4">
                <Frown size={100} className="mb-3 text-danger" />
                <Modal.Title className="fw-bold fs-3 mb-1">
                    Perdiste
                </Modal.Title>

                <Row className="g-3 mb-4 mt-4">
                    <Col xs={6}>
                        <div className="border rounded p-3">
                            <p className="mb-2 small text-secondary">
                                Palabras correctas
                            </p>
                            <p className="mb-0 fw-bold fs-4">{wordCount}</p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="border rounded p-3">
                            <p className="mb-2 small text-secondary">
                                Puntaje final
                            </p>
                            <p className="mb-0 fw-bold fs-4">{score}</p>
                        </div>
                    </Col>
                </Row>

                <Stack gap={3} className="w-100">
                    <Button
                        type="button"
                        size="lg"
                        className="border-0 fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                        style={{
                            background:
                                "linear-gradient(90deg, #08abc6 0%, #0492d9 100%)",
                        }}
                        onClick={onPlayAgain}
                    >
                        <RefreshCcw size={20} />
                        Jugar de nuevo
                    </Button>
                    <Button
                        as={Link}
                        to="/leaderboard"
                        variant="outline-secondary"
                        size="lg"
                        className=" fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                    >
                        <Trophy size={20} />
                        Mejores puntajes
                    </Button>
                </Stack>
            </Modal.Body>
        </Modal>
    );
};
