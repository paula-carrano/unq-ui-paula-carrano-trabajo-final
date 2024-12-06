// src/components/StartScreen/StartScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();

  const startSinglePlayer = () => {
    navigate("/game/singleplayer");
  };

  const startMultiplayer = () => {
    navigate("/game/multiplayer");
  };

  return (
    <div>
      <h1>Welcome to the Memo Game!</h1>
      <button onClick={startSinglePlayer}>Single Player</button>
      <button onClick={startMultiplayer}>Multiplayer</button>
    </div>
  );
};

export default StartScreen;
