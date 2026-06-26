import { RefreshCcw, House, TriangleAlert } from "lucide-react";
import { Container, Button } from "react-bootstrap";

export const ErrorPage = () => {
    return (
        <Container fluid>
            <TriangleAlert className="text-danger" size={100} />
            <h2>¡Ups! algo salió mal</h2>
            <h4>No pudimos conectar con el servidor</h4>
            <h4>Por favor, verifica tu conexión e intenta nuevamente.</h4>
            <Button variant="primary" onClick={() => window.location.reload()}>
                <RefreshCcw />
                Reintentar
            </Button>
            <Button
                variant="outline-secondary"
                onClick={() => (window.location.href = "/")}
            >
                <House /> Ir al inicio
            </Button>
        </Container>
    );
};
