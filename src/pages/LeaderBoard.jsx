import { Medal, MoveLeft } from "lucide-react";
import { Container, ListGroup } from "react-bootstrap";

export const LeaderBoard = () => {
    const puntajes = [
        { nombre: "Ana", puntaje: 50 },
        { nombre: "Luis", puntaje: 40 },
        { nombre: "Marta", puntaje: 30 },
        { nombre: "Juan", puntaje: 20 },
        { nombre: "Sofia", puntaje: 10 },
    ];
    const puntajesCompletos = [
        ...puntajes,
        ...Array(10).fill({ nombre: "-", puntaje: 0 }),
    ].slice(0, 10);

    return (
        <Container>
            <MoveLeft />
            <h1> Mejores Puntajes</h1>
            <ListGroup as="ol" numbered>
                {puntajesCompletos.map((puntaje, index) => (
                    <ListGroup.Item key={index}>
                        {index < 3 && <Medal />}
                        {puntaje.nombre} {puntaje.puntaje}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};
