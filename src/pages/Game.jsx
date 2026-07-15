import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { GameOverModal, Header, WordChain, WordInput } from "../components";
import { useWordChainGame } from "../hooks";

export const Game = () => {
    const {
        timeLeft,
        score,
        wordChain,
        wordCount,
        error,
        isValidating,
        isGameOver,
        playAgain,
        submitWord,
    } = useWordChainGame();

    return (
        <div className="game-shell">
            <Container fluid className="game-container px-0">
                <Row className="game-row justify-content-center">
                    <Col xs={12} className="game-col">
                        <div className="game-panel">
                            <div className="position-relative mb-2">
                                <Link
                                    className="text-dark position-absolute start-0"
                                    to="/"
                                >
                                    <MoveLeft />
                                </Link>
                            </div>
                            <Header
                                timeLeft={timeLeft}
                                score={score}
                                wordCount={wordCount}
                            />

                            <WordChain words={wordChain} />
                            <WordInput
                                error={error}
                                isValidating={isValidating}
                                onSubmit={submitWord}
                            />
                            <GameOverModal
                                show={isGameOver}
                                score={score}
                                wordCount={wordCount}
                                error={error}
                                onPlayAgain={playAgain}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
