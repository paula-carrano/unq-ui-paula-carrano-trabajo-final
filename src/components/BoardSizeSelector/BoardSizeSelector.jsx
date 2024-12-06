import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./boardSizeSelector.css";

export const BoardSizeSelector = () => {
  const { mode } = useParams();
  const navigate = useNavigate();

  const selectBoardSize = (size) => {
    navigate(`/game/${mode}/${size}`);
  };

  return (
    <div className="container-sizeBoard">
      <h1>Select Board Size</h1>
      <div className="button-row">
        <button onClick={() => selectBoardSize(4)}>4x4</button>
        <button onClick={() => selectBoardSize(5)}>5x5</button>
        <button onClick={() => selectBoardSize(6)}>6x6</button>
      </div>
    </div>
  );
};
