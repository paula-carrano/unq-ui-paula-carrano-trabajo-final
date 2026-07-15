import { useState } from "react";
import { Trophy, Play, Link2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "react-bootstrap";
import {
    ActionButton,
    CenteredPage,
    PlayerNameModal,
    PrimaryButton,
} from "../components";
import { savePlayerName } from "../service/storage";

export const Home = () => {
    const navigate = useNavigate();
    const [showPlayerModal, setShowPlayerModal] = useState(false);

    const handlePlayerConfirm = (playerName) => {
        savePlayerName(playerName);
        setShowPlayerModal(false);
        navigate("/game");
    };

    return (
        <CenteredPage>
            <Link2
                size={52}
                strokeWidth={3}
                aria-hidden="true"
                className="home-brand-icon"
            />

            <div>
                <h1 className="mb-3 text-uppercase fw-bold lh-sm fs-3 text-dark">
                    Palabras
                    <br />
                    encadenadas
                </h1>
                <p className="mb-0 text-secondary">
                    Forma la cadena mas larga de palabras
                    <br className="d-none d-sm-block" />
                    antes de que se acabe el tiempo.
                </p>
            </div>

            <Stack gap={3} className="w-100">
                <PrimaryButton
                    type="button"
                    size="lg"
                    icon={<Play size={22} fill="currentColor" />}
                    onClick={() => setShowPlayerModal(true)}
                >
                    Jugar
                </PrimaryButton>

                <ActionButton
                    as={Link}
                    to="/leaderboard"
                    variant="outline-primary"
                    size="lg"
                    icon={<Trophy size={20} />}
                >
                    Ver puntajes
                </ActionButton>
            </Stack>

            {showPlayerModal && (
                <PlayerNameModal
                    show={showPlayerModal}
                    onCancel={() => setShowPlayerModal(false)}
                    onConfirm={handlePlayerConfirm}
                />
            )}
        </CenteredPage>
    );
};
