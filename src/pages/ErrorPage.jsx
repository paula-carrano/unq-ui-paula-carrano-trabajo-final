import { RefreshCcw, House, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

export const ErrorPage = () => {
    return (
        <div className="page-fill d-flex align-items-center justify-content-center">
            <Container fluid className="px-0">
                <Row className="justify-content-center">
                    <Col xs={12} sm={9} md={6} lg={4} xl={3}>
                        <Stack
                            gap={4}
                            className="align-items-center text-center mx-auto"
                        >
                            <TriangleAlert
                                className="text-danger"
                                size={96}
                                strokeWidth={2.5}
                                aria-hidden="true"
                            />

                            <div>
                                <h1 className="mt-3 mb-3 fw-bold lh-sm fs-2 text-dark">
                                    ¡Ups! Algo salió mal
                                </h1>
                                <p className="mt-3 mb-0 text-secondary">
                                    Por favor intenta nuevamente.
                                </p>
                            </div>

                            <Button
                                as={Link}
                                to="/"
                                variant="outline-primary"
                                size="lg"
                                className="fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                            >
                                <House size={22} />
                                Ir al inicio
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
