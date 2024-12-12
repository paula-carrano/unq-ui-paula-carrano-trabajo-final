import React from "react";
import { useNavigate } from "react-router-dom";
import "./errorPage.css";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>
          <span className="error-sign">! ERROR</span>
          <br />
          <span className="invalid-url">Invalid URL</span>
        </h1>
        <button onClick={() => navigate("/")}>Back to Start</button>
      </div>
    </div>
  );
};
