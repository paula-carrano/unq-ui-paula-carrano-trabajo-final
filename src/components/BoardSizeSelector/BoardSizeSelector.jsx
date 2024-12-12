import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./boardSizeSelector.css";

export const BoardSizeSelector = () => {
  const { mode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (mode !== "singleplayer" && mode !== "multiplayer") {
      navigate("/error");
    }
  }, [mode, navigate]);

  const selectBoardSize = (size) => {
    if (size < 2 && size > 6) {
      navigate("/error");
    } else {
      navigate(`/${mode}/${size}`);
    }
  };

  return (
    <div className="container-sizeBoard">
      <h1>Select Board Size</h1>
      <div className="button-row">
        <button onClick={() => selectBoardSize(2)}>2x2</button>
        <button onClick={() => selectBoardSize(4)}>4x4</button>
        <button onClick={() => selectBoardSize(5)}>5x5</button>
        <button onClick={() => selectBoardSize(6)}>6x6</button>
      </div>
    </div>
  );
};
