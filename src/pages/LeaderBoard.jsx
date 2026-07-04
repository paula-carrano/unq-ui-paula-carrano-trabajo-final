import { Medal, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";
import { getLeaderboardScores } from "../service/storage";

export const LeaderBoard = () => {
    const puntajesCompletos = [
        ...getLeaderboardScores()
            .map((score) => ({
                nombre: score.nombre || "-",
                puntaje: Number(score.puntaje) || 0,
            }))
            .sort((a, b) => b.puntaje - a.puntaje),
        ...Array(10).fill({ nombre: "-", puntaje: 0 }),
    ].slice(0, 10);

    return (
        <Container
            fluid
            className="d-flex flex-column h-100"
            style={{ minHeight: "calc(100vh - 6rem)" }}
        >
            <div className="position-relative d-flex align-items-center justify-content-center">
                <Link className="text-dark position-absolute start-0" to="/">
                    <MoveLeft />
                </Link>
                <h1 className="mb-3 text-uppercase fw-bold lh-sm fs-3 text-dark">
                    {" "}
                    Mejores Puntajes
                </h1>
            </div>
            <div
                className="mx-auto mt-4 flex-grow-1 d-flex"
                style={{ maxWidth: "60%", width: "100%" }}
            >
                <ListGroup
                    as="ol"
                    numbered
                    variant="flush"
                    className="w-100 d-flex flex-column"
                >
                    {puntajesCompletos.map((puntaje, index) => (
                        <ListGroup.Item
                            key={index}
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
