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
        <section className="p-4">
            <h2 className="mb-3 text-uppercase fw-bold text-dark fs-6">
                Ingresa una palabra
            </h2>

            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        value={word}
                        disabled={isValidating}
                        placeholder="Escribe una palabra..."
                        onChange={(event) => setWord(event.target.value)}
                    />
                    <Button
                        type="submit"
                        disabled={isValidating}
                        className="d-flex align-items-center gap-2 px-4"
                    >
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

            <ul className="mb-3 rounded-3 bg-light py-3 pe-3 text-secondary small">
                <li>La palabra debe existir.</li>
                <li>No puede haber sido utilizada antes.</li>
                <li>
                    Debe comenzar con la ultima letra de la palabra anterior.
                </li>
            </ul>

            {error && (
                <Alert variant="danger" className="mb-0 py-2 small">
                    {error}
                </Alert>
            )}
        </section>
    );
};
