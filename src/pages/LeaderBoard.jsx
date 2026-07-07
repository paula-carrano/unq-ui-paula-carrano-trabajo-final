import { Medal, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";
import { getTopLeaderboardScores } from "../service/storage";

export const LeaderBoard = () => {
    const puntajesCompletos = getTopLeaderboardScores();

    return (
        <Container
            fluid
            className="page-fill d-flex flex-column h-100"
        >
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
                    numbered
                    variant="flush"
                    className="w-100 d-flex flex-column"
                >
                    {puntajesCompletos.map((puntaje, index) => (
                        <ListGroup.Item
                            key={`${puntaje.nombre}-${puntaje.puntaje}-${index}`}
                            className="flex-fill d-flex align-items-center justify-content-between"
                        >
                            <span>
                                {index < 3 && <Medal />}
                                {puntaje.nombre}
                            </span>
                            <span>{puntaje.puntaje}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </Container>
    );
};
