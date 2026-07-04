import { useState } from "react";
import { Play, User } from "lucide-react";
import { Button, Form, Modal, Stack } from "react-bootstrap";
import { getPlayerName } from "../service/storage";

export const PlayerNameModal = ({ show, onCancel, onConfirm }) => {
    const [name, setName] = useState(() => getPlayerName());
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const handleCancel = () => {
        setWasSubmitted(false);
        onCancel();
    };

    const trimmedName = name.trim();
    const hasError = wasSubmitted && trimmedName === "";

    const handleSubmit = (event) => {
        event.preventDefault();
        setWasSubmitted(true);

        if (trimmedName === "") {
            return;
        }

        onConfirm(trimmedName);
    };

    return (
        <Modal show={show} onHide={handleCancel} centered>
            <Form onSubmit={handleSubmit}>
                <Modal.Body className="text-center p-4">
                    <User size={72} className="mb-3 text-primary" />
                    <Modal.Title className="fw-bold fs-3 mb-3">
                        Ingresa tu nombre
                    </Modal.Title>

                    <Form.Group className="text-start mb-4" controlId="playerName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={name}
                            isInvalid={hasError}
                            maxLength={24}
                            placeholder="Tu nombre"
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            El nombre es obligatorio.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Stack gap={3}>
                        <Button
                            type="submit"
                            size="lg"
                            className="border-0 fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                            style={{
                                background:
                                    "linear-gradient(90deg, #08abc6 0%, #0492d9 100%)",
                            }}
                        >
                            <Play size={20} fill="currentColor" />
                            Comenzar
                        </Button>
                        <Button
                            type="button"
                            variant="outline-secondary"
                            size="lg"
                            className="fw-semibold"
                            onClick={handleCancel}
                        >
                            Cancelar
                        </Button>
                    </Stack>
                </Modal.Body>
            </Form>
        </Modal>
    );
};
