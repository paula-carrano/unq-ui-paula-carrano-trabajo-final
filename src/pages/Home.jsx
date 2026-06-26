import { Trophy, Play } from "lucide-react";
import { Button, Container } from "react-bootstrap";

export const Home = () => {
    return (
        <Container>
            <h1>Palabras encadenadas</h1>
            <p>
                Formá la cadena más larga de palabras antes de que el tiempo
                termine
            </p>
            <Button variant="primary" href="/game">
                <Play size={24} /> Jugar
            </Button>
            <Button variant="outline-primary" href="/leaderboard">
                <Trophy size={24} /> Ver ranking
            </Button>
        </Container>
    );
};
