import { Col, Container, Row, Stack } from "react-bootstrap";

export const CenteredPage = ({ children }) => {
    return (
        <div className="page-fill d-flex align-items-center justify-content-center">
            <Container fluid className="px-0">
                <Row className="justify-content-center">
                    <Col xs={12} sm={9} md={6} lg={4} xl={3}>
                        <Stack
                            gap={4}
                            className="align-items-center text-center mx-auto"
                        >
                            {children}
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
