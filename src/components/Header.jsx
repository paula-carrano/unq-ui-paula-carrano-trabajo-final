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
        <HeaderStat
            label="Tiempo"
            value={formattedTime}
            valueClassName="text-primary"
            icon={<Clock3 size={14} className="me-1" />}
            withBorder
        />
    );
};

const Score = ({ score }) => {
    return (
        <HeaderStat
            label="Puntaje"
            value={score}
            valueClassName="text-success"
            withBorder
        />
    );
};

const WordCount = ({ wordCount }) => {
    return (
        <HeaderStat
            label="Palabras"
            value={wordCount}
            valueClassName="header-stat-words"
        />
    );
};

const HeaderStat = ({
    label,
    value,
    icon,
    valueClassName = "",
    withBorder = false,
}) => {
    return (
        <Col xs={4} className={withBorder ? "border-end" : ""}>
            <h2 className="mb-2 text-uppercase fw-bold text-dark fs-6">
                {icon}
                {label}
            </h2>
            <p
                className={`mb-0 fw-bold fs-3 ${valueClassName}`.trim()}
            >
                {value}
            </p>
        </Col>
    );
};
