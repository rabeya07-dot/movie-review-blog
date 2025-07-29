// src/components/PaginationBar.js
import React from "react";
import { useNavigate } from "react-router-dom";

const PaginationBar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <button onClick={() => navigate("/")} style={buttonStyle}>1</button>
      <button onClick={() => navigate("/review/1")} style={buttonStyle}>2</button>
      <button onClick={() => navigate("/author/Nolan")} style={buttonStyle}>3</button>
    </div>
  );
};

const buttonStyle = {
  margin: "0 5px",
  padding: "8px 16px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  cursor: "pointer",
  backgroundColor: "#f0f0f0",
};

export default PaginationBar;
