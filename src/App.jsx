import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MemoGame,
  BoardSizeSelector,
  StartScreen,
  ErrorPage,
} from "./components/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/:mode" element={<BoardSizeSelector />} />
        <Route path="/:mode/:size" element={<MemoGame />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
