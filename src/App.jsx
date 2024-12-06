import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MemoGame, BoardSizeSelector, StartScreen } from "./components/index";

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
