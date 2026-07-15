import { useCallback, useEffect, useRef, useState } from "react";
import { WORD_TIME_LIMIT } from "../constants/game";
import { validateWord } from "../service/api";
import { saveLeaderboardScore } from "../service/storage";

export const useWordChainGame = () => {
    const [timeLeft, setTimeLeft] = useState(WORD_TIME_LIMIT);
    const [score, setScore] = useState(0);
    const [wordChain, setWordChain] = useState([]);
    const [error, setError] = useState("");
    const [isValidating, setIsValidating] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const scoreWasSaved = useRef(false);

    const finishGame = useCallback(() => {
        setIsGameOver(true);
    }, []);

    const playAgain = () => {
        setTimeLeft(WORD_TIME_LIMIT);
        setScore(0);
        setWordChain([]);
        setError("");
        setIsValidating(false);
        setIsGameOver(false);
        setHasStarted(false);
        scoreWasSaved.current = false;
    };

    useEffect(() => {
        if (!hasStarted || isGameOver) {
            return;
        }

        const timerId = setTimeout(() => {
            if (timeLeft <= 1) {
                setTimeLeft(0);
                setError("Se termino el tiempo del turno.");
                finishGame();
                return;
            }

            setTimeLeft((currentTime) => currentTime - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, finishGame, hasStarted, isGameOver]);

    useEffect(() => {
        if (!isGameOver || scoreWasSaved.current) {
            return;
        }

        saveLeaderboardScore(score);
        scoreWasSaved.current = true;
    }, [isGameOver, score]);

    const submitWord = async (word) => {
        const formattedWord = word.trim().toUpperCase();

        if (formattedWord === "") {
            setError("Tenes que ingresar una palabra.");
            return;
        }

        setHasStarted(true);

        const alreadyUsed = wordChain.some(
            (usedWord) => usedWord.toUpperCase() === formattedWord,
        );

        if (alreadyUsed) {
            setError("Esa palabra ya fue utilizada.");
            return;
        }

        const previousWord = wordChain.at(-1);

        if (previousWord) {
            const expectedLetter = previousWord.at(-1).toUpperCase();
            const currentLetter = formattedWord.at(0);

            if (currentLetter !== expectedLetter) {
                setError(
                    `La palabra debe comenzar con la letra "${expectedLetter}".`,
                );
                return;
            }
        }

        setIsValidating(true);

        try {
            const wordExists = await validateWord(formattedWord);

            if (!wordExists) {
                setError("La palabra no existe.");
                return;
            }
        } catch {
            setError("No se pudo validar la palabra. Intentalo de nuevo.");
            return;
        } finally {
            setIsValidating(false);
        }

        setWordChain((currentWords) => [...currentWords, formattedWord]);
        setScore((currentScore) => currentScore + formattedWord.length);
        setTimeLeft(WORD_TIME_LIMIT);
        setError("");
    };

    return {
        timeLeft,
        score,
        wordChain,
        wordCount: wordChain.length,
        error,
        isValidating,
        isGameOver,
        playAgain,
        submitWord,
    };
};
