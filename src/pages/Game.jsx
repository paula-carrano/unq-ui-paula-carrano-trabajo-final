import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Game = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [score] = useState(0);
    const [wordCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft === 0) {
            navigate("/game-over");
            return;
        }

        const timerId = setTimeout(() => {
            setTimeLeft((currentTime) => currentTime - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, navigate]);

    return (
        <div>
            <Header
                timeLeft={timeLeft}
                score={score}
                wordCount={wordCount}
            />
        </div>
    );
};
