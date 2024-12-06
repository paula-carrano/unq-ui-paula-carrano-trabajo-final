// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartScreen from "./components/StartScreen/StartScreen";
import { MemoGame } from "./components/MemoGame/MemoGame";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de la pantalla de inicio */}
        <Route path="/" element={<StartScreen />} />

        {/* Rutas para el juego, pasando el modo de juego como parámetro */}
        <Route path="/game/:mode" element={<MemoGame />} />
      </Routes>
    </Router>
  );
};

export default App;
