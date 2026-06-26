import { useState } from "react";
import { Home, ErrorPage, GameOver, Game, LeaderBoard } from "./pages/index.js";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game-over" element={<GameOver />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
