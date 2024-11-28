import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Screens/Home";
import { BoardOptions } from "./Components/BoardOptions";
import { Score } from "./Components/Score";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mode" element={<BoardOptions />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
}

export default App;
