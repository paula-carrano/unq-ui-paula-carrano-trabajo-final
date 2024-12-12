import React from "react";
import { useNavigate } from "react-router-dom";
import "./startScreen.css";

export const StartScreen = () => {
  const navigate = useNavigate();

  const startSinglePlayer = () => {
    navigate("/singleplayer");
  };

  const startMultiplayer = () => {
    navigate("/multiplayer");
  };

  return (
    <div className="container-screen">
      <h1>Welcome to the Memo Game!</h1>
      <button onClick={startSinglePlayer}>Single Player</button>
      <button onClick={startMultiplayer}>Multiplayer</button>
    </div>
  );
};
