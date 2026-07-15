import { Medal, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { getTopLeaderboardScores } from "../service/storage";
import { MEDAL_COLORS } from "../constants/game";

export const LeaderBoard = () => {
    const puntajesCompletos = getTopLeaderboardScores();

    return (
        <Container fluid className="page-fill d-flex flex-column h-100">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <Link className="text-dark position-absolute start-0" to="/">
                    <MoveLeft />
                </Link>
                <h1 className="mb-3 text-uppercase fw-bold lh-sm fs-3 text-dark">
                    Mejores Puntajes
                </h1>
            </div>
            <div className="leaderboard-list-wrapper mx-auto mt-4 flex-grow-1 d-flex w-100">
                <ListGroup
                    as="ol"
                    variant="flush"
                    className="w-100 d-flex flex-column"
                >
                    {puntajesCompletos.map((puntaje, index) => (
                        <ListGroup.Item
                            key={`${puntaje.nombre}-${puntaje.puntaje}-${index}`}
                            as="li"
                            className="flex-fill d-flex align-items-center"
                        >
                            <Row className="w-100 align-items-center">
                                <Col xs={2}>{index + 1}.</Col>
                                <Col className="d-flex justify-content-center">
                                    <span className="d-inline-flex align-items-center">
                                        <Medal
                                            color={MEDAL_COLORS[index]}
                                            size={20}
                                            className={`me-2 ${index >= 3 ? "invisible" : ""}`}
                                        />
                                        {puntaje.nombre}
                                    </span>
                                </Col>
                                <Col xs={2} className="text-end">
                                    {puntaje.puntaje}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </Container>
    );
};
