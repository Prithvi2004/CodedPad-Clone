import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Header.css";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="logo">
        <h1>Last Minute</h1>
        <p>01100011 01101111 01100100 01100101</p>
      </div>
      <nav className="nav-links">
        <a href="#how-it-works">How it Works</a>
        <a href="#simple-policy">Simple Policy</a>
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle Theme
        </button>
      </nav>
    </header>
  );
};

export default Header;
