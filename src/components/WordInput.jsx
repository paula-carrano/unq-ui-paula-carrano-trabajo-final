import { useEffect, useRef, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { WORD_RULES } from "../constants/game";

export const WordInput = ({ error, isValidating, onSubmit }) => {
    const [word, setWord] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (!isValidating) {
            inputRef.current?.focus();
        }
    }, [isValidating]);

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
                        ref={inputRef}
                        type="text"
                        value={word}
                        disabled={isValidating}
                        placeholder="Escribe una palabra..."
                        onChange={(event) => setWord(event.target.value)}
                    />
                    <Button
                        type="submit"
                        disabled={isValidating}
                        className="d-flex align-items-center gap-2 px-3 px-sm-4"
                    >
                        {isValidating ? (
                            <>
                                <LoaderCircle size={18} aria-hidden="true" />
                                <span className="d-none d-sm-inline">
                                    Validando...
                                </span>
                                <span className="visually-hidden">
                                    Validando palabra
                                </span>
                            </>
                        ) : (
                            <>
                                <Send size={18} aria-hidden="true" />
                                <span className="d-none d-sm-inline">
                                    Enviar
                                </span>
                            </>
                        )}
                    </Button>
                </InputGroup>
            </Form>

            <ul className="mb-3 rounded-3 bg-light py-3 pe-3 text-secondary small">
                {WORD_RULES.map((rule) => (
                    <li key={rule}>{rule}</li>
                ))}
            </ul>

            {error && (
                <Alert variant="danger" className="mb-0 py-2 small">
                    {error}
                </Alert>
            )}
        </section>
    );
};
