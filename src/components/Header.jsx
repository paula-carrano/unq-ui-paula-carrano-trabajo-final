export const Header = ({ timeLeft, score, wordCount }) => {
    return (
        <>
            <Timer timeLeft={timeLeft} />
            <Score score={score} />
            <WordCount wordCount={wordCount} />
        </>
    );
};

const Timer = ({ timeLeft }) => {
    const formattedTime = `00:${String(timeLeft).padStart(2, "0")}`;

    return (
        <>
            <h2>Tiempo</h2>
            <p>{formattedTime}</p>
        </>
    );
};

const Score = ({ score }) => {
    return (
        <>
            <h2>Puntaje</h2>
            <p>{score}</p>
        </>
    );
};

const WordCount = ({ wordCount }) => {
    return (
        <>
            <h2>Palabras</h2>
            <p>{wordCount}</p>
        </>
    );
};
