import { House, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { ActionButton, CenteredPage } from "../components";

export const ErrorPage = () => {
    return (
        <CenteredPage>
            <TriangleAlert
                className="text-danger"
                size={96}
                strokeWidth={2.5}
                aria-hidden="true"
            />

            <div>
                <h1 className="mt-3 mb-3 fw-bold lh-sm fs-2 text-dark">
                    ¡Ups! Algo salió mal
                </h1>
                <p className="mt-3 mb-0 text-secondary">
                    Por favor intenta nuevamente.
                </p>
            </div>

            <ActionButton
                as={Link}
                to="/"
                variant="outline-primary"
                size="lg"
                icon={<House size={22} />}
            >
                Ir al inicio
            </ActionButton>
        </CenteredPage>
    );
};
