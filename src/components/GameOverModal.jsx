import { Frown, RefreshCcw, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Col, Modal, Row } from "react-bootstrap";
import { ActionButton } from "./ActionButton";
import { ModalActions } from "./ModalActions";
import { PrimaryButton } from "./PrimaryButton";
import { StatCard } from "./StatCard";

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
                        <StatCard
                            label="Palabras correctas"
                            value={wordCount}
                        />
                    </Col>
                    <Col xs={6}>
                        <StatCard label="Puntaje final" value={score} />
                    </Col>
                </Row>

                <ModalActions>
                    <PrimaryButton
                        type="button"
                        size="lg"
                        icon={<RefreshCcw size={20} />}
                        onClick={onPlayAgain}
                    >
                        Jugar de nuevo
                    </PrimaryButton>
                    <ActionButton
                        as={Link}
                        to="/leaderboard"
                        variant="outline-secondary"
                        size="lg"
                        icon={<Trophy size={20} />}
                    >
                        Mejores puntajes
                    </ActionButton>
                </ModalActions>
            </Modal.Body>
        </Modal>
    );
};
