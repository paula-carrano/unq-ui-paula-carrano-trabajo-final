import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Header, WordChain, WordInput } from "../components";
import { validateWord } from "../service/api";

const WORD_TIME_LIMIT = 15;

export const Game = () => {
    const [timeLeft, setTimeLeft] = useState(WORD_TIME_LIMIT);
    const [score, setScore] = useState(0);
    const [wordChain, setWordChain] = useState([]);
    const [error, setError] = useState("");
    const [isValidating, setIsValidating] = useState(false);
    const navigate = useNavigate();

    const finishGame = useCallback(() => {
        navigate("/game-over", {
            state: {
                score,
                wordCount: wordChain.length,
            },
        });
    }, [navigate, score, wordChain.length]);

    useEffect(() => {
        if (timeLeft === 0) {
            finishGame();
            return;
        }

        const timerId = setTimeout(() => {
            setTimeLeft((currentTime) => currentTime - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, finishGame]);

    const handleWordSubmit = async (word) => {
        const formattedWord = word.trim().toUpperCase();

        if (formattedWord === "") {
            finishGame();
            return;
        }

        const alreadyUsed = wordChain.some(
            (usedWord) => usedWord.toUpperCase() === formattedWord,
        );

        if (alreadyUsed) {
            finishGame();
            return;
        }

        const previousWord = wordChain.at(-1);

        if (previousWord) {
            const expectedLetter = previousWord.at(-1).toUpperCase();
            const currentLetter = formattedWord.at(0);

            if (currentLetter !== expectedLetter) {
                finishGame();
                return;
            }
        }

        setIsValidating(true);

        try {
            const wordExists = await validateWord(formattedWord);

            if (!wordExists) {
                finishGame();
                return;
            }
        } catch {
            finishGame();
            return;
        } finally {
            setIsValidating(false);
        }

        setWordChain((currentWords) => [...currentWords, formattedWord]);
        setScore((currentScore) => currentScore + 10);
        setTimeLeft(WORD_TIME_LIMIT);
        setError("");
    };

    return (
        <div className="game-shell">
            <Container fluid className="game-container px-0">
                <Row className="game-row justify-content-center">
                    <Col xs={12} className="game-col">
                        <div className="game-panel">
                            <Header
                                timeLeft={timeLeft}
                                score={score}
                                wordCount={wordChain.length}
                            />

                            <WordChain words={wordChain} />
                            <WordInput
                                error={error}
                                isValidating={isValidating}
                                onSubmit={handleWordSubmit}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
