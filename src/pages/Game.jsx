import { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GameOverModal, Header, WordChain, WordInput } from "../components";
import { validateWord } from "../service/api";
import { saveLeaderboardScore } from "../service/storage";

const WORD_TIME_LIMIT = 15;

export const Game = () => {
    const [timeLeft, setTimeLeft] = useState(WORD_TIME_LIMIT);
    const [score, setScore] = useState(0);
    const [wordChain, setWordChain] = useState([]);
    const [error, setError] = useState("");
    const [isValidating, setIsValidating] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const scoreWasSaved = useRef(false);

    const finishGame = useCallback(() => {
        setIsGameOver(true);
    }, []);

    const handlePlayAgain = () => {
        setTimeLeft(WORD_TIME_LIMIT);
        setScore(0);
        setWordChain([]);
        setError("");
        setIsValidating(false);
        setIsGameOver(false);
        scoreWasSaved.current = false;
    };

    useEffect(() => {
        if (isGameOver) {
            return;
        }

        const timerId = setTimeout(() => {
            if (timeLeft <= 1) {
                setTimeLeft(0);
                finishGame();
                return;
            }

            setTimeLeft((currentTime) => currentTime - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, finishGame, isGameOver]);

    useEffect(() => {
        if (!isGameOver || scoreWasSaved.current) {
            return;
        }

        saveLeaderboardScore(score);
        scoreWasSaved.current = true;
    }, [isGameOver, score]);

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
                            <GameOverModal
                                show={isGameOver}
                                score={score}
                                wordCount={wordChain.length}
                                onPlayAgain={handlePlayAgain}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
