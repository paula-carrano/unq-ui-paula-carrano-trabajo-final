import { ArrowRight } from "lucide-react";
import { Badge, Stack } from "react-bootstrap";

export const WordChain = ({ words }) => {
    return (
        <section className="border-bottom p-4">
            <h2 className="mb-3 text-uppercase fw-bold text-dark fs-6">
                Cadena de palabras
            </h2>

            {words.length === 0 ? (
                <p className="mb-0 text-secondary">
                    Todavia no hay palabras en la cadena.
                </p>
            ) : (
                <Stack
                    as="ol"
                    direction="horizontal"
                    gap={3}
                    className="align-items-center flex-wrap list-unstyled mb-0"
                >
                    {words.map((word, index) => (
                        <li
                            key={`${word}-${index}`}
                            className="d-flex align-items-center gap-3"
                        >
                            <Badge
                                bg="transparent"
                                text="dark"
                                className="border border-success rounded-2 px-4 py-2"
                            >
                                {word}
                            </Badge>
                            {index < words.length - 1 && (
                                <ArrowRight
                                    size={18}
                                    className="text-secondary"
                                    aria-hidden="true"
                                />
                            )}
                        </li>
                    ))}
                </Stack>
            )}
        </section>
    );
};
