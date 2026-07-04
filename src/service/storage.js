const PLAYER_NAME_KEY = "playerName";
const LEADERBOARD_SCORES_KEY = "leaderboardScores";
const DEFAULT_PLAYER_NAME = "Jugador";

export const getPlayerName = () => {
    return localStorage.getItem(PLAYER_NAME_KEY)?.trim() || "";
};

export const savePlayerName = (playerName) => {
    localStorage.setItem(PLAYER_NAME_KEY, playerName.trim());
};

export const getLeaderboardScores = () => {
    try {
        const savedScores = JSON.parse(
            localStorage.getItem(LEADERBOARD_SCORES_KEY) ?? "[]",
        );

        return Array.isArray(savedScores) ? savedScores : [];
    } catch {
        return [];
    }
};

export const saveLeaderboardScore = (score) => {
    const playerName = getPlayerName() || DEFAULT_PLAYER_NAME;
    const updatedScores = [
        ...getLeaderboardScores(),
        { nombre: playerName, puntaje: score },
    ];

    localStorage.setItem(
        LEADERBOARD_SCORES_KEY,
        JSON.stringify(updatedScores),
    );
};
