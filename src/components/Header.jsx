import { Clock3 } from "lucide-react";
import { Col, Row } from "react-bootstrap";

export const Header = ({ timeLeft, score, wordCount }) => {
    return (
        <Row className="g-0 text-center border-bottom py-3">
            <Timer timeLeft={timeLeft} />
            <Score score={score} />
            <WordCount wordCount={wordCount} />
        </Row>
    );
};

const Timer = ({ timeLeft }) => {
    const formattedTime = `00:${String(timeLeft).padStart(2, "0")}`;

    return (
        <Col xs={4} className="border-end">
            <h2 className="mb-2 text-uppercase fw-bold text-dark fs-6">
                <Clock3 size={14} className="me-1" />
                Tiempo
            </h2>
            <p className="mb-0 fw-bold fs-3 text-primary">{formattedTime}</p>
        </Col>
    );
};

const Score = ({ score }) => {
    return (
        <Col xs={4} className="border-end">
            <h2 className="mb-2 text-uppercase fw-bold text-dark fs-6">
                Puntaje
            </h2>
            <p className="mb-0 fw-bold fs-3 text-success">{score}</p>
        </Col>
    );
};

const WordCount = ({ wordCount }) => {
    return (
        <Col xs={4}>
            <h2 className="mb-2 text-uppercase fw-bold text-dark fs-6">
                Palabras
            </h2>
            <p className="mb-0 fw-bold fs-3" style={{ color: "#7f4dcc" }}>
                {wordCount}
            </p>
        </Col>
    );
};
