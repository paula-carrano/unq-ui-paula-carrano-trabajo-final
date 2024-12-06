// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartScreen from "./components/StartScreen/StartScreen";
import { MemoGame } from "./components/MemoGame/MemoGame";
import BoardSizeSelector from "./components/BoardSizeSelector/BoardSizeSelector";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game/:mode" element={<BoardSizeSelector />} />
        <Route path="/game/:mode/:size" element={<MemoGame />} />
      </Routes>
    </Router>
  );
};

export default App;
