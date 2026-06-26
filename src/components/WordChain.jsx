export const WordChain = ({ words }) => {
    return (
        <>
            <h2>Cadena de palabras</h2>

            {words.length === 0 ? (
                <p>Todavia no hay palabras en la cadena.</p>
            ) : (
                <ol>
                    {words.map((word, index) => (
                        <li key={`${word}-${index}`}>
                            {word}
                            {index < words.length - 1 && " -> "}
                        </li>
                    ))}
                </ol>
            )}
        </>
    );
};
