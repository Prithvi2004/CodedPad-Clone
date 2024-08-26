import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CodeContext } from "../context/CodeContext";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const { code, setCode } = useContext(CodeContext);

  const handleOpenClick = () => {
    navigate("/notes");
  };

  return (
    <main className="main-content">
      <div className="background">
        <div className="text-content">
          <h1 className="fade-in">
            Code, create, and conquer, even at the last minute.
          </h1>
          <p className="fade-in">
            No registration. No installation. Just pick a code and get to work.
          </p>
          <div className="code-input">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code here..."
            />
            <button onClick={handleOpenClick} className="btn-animated">
              Open
            </button>
          </div>
          <p className="fade-in">That’s all it takes!</p>
          <p className="example-code fade-in">
            For example, you can use <span>lastminute123</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
