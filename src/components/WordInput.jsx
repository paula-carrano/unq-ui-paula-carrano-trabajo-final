import { useState } from "react";
import { Send } from "lucide-react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";

export const WordInput = ({ error, isValidating, onSubmit }) => {
    const [word, setWord] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(word);
        setWord("");
    };

    return (
        <section>
            <h2>Ingresa una palabra</h2>

            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Control
                        type="text"
                        value={word}
                        disabled={isValidating}
                        placeholder="Escribe una palabra..."
                        onChange={(event) => setWord(event.target.value)}
                    />
                    <Button type="submit" disabled={isValidating}>
                        {isValidating ? (
                            "Validando..."
                        ) : (
                            <>
                                <Send size={18} /> Enviar
                            </>
                        )}
                    </Button>
                </InputGroup>
            </Form>

            <ul>
                <li>La palabra debe existir.</li>
                <li>No puede haber sido utilizada antes.</li>
                <li>Debe comenzar con la ultima letra de la palabra anterior.</li>
            </ul>

            {error && <Alert variant="danger">{error}</Alert>}
        </section>
    );
};
