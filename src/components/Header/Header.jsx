export const Header = ({ timeLeft, score, wordCount }) => {
    return (
        <header>
            <Timer timeLeft={timeLeft} />
            <Score score={score} />
            <WordCount wordCount={wordCount} />
        </header>
    );
};

const Timer = ({ timeLeft }) => {
    const formattedTime = `00:${String(timeLeft).padStart(2, "0")}`;

    return (
        <section>
            <h2>Tiempo</h2>
            <p>{formattedTime}</p>
        </section>
    );
};

const Score = ({ score }) => {
    return (
        <section>
            <h2>Puntaje</h2>
            <p>{score}</p>
        </section>
    );
};

const WordCount = ({ wordCount }) => {
    return (
        <section>
            <h2>Palabras</h2>
            <p>{wordCount}</p>
        </section>
    );
};
