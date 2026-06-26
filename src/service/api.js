const BASE_URL = "https://word-api-hmlg.vercel.app";

export const validateWord = async (word) => {
    const cleanWord = word.trim();

    if (cleanWord === "") {
        return false;
    }

    const response = await fetch(
        `${BASE_URL}/api/validate?word=${encodeURIComponent(cleanWord)}`,
    );

    if (!response.ok) {
        throw new Error("No se pudo validar la palabra");
    }

    const data = await response.json();

    return Boolean(data.exists);
};
