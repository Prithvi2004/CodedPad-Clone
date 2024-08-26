import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NotesPage from "./components/NotesPage";
import { ThemeProvider } from "./context/ThemeContext";
import { CodeProvider } from "./context/CodeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CodeProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/notes" element={<NotesPage />} />
            </Routes>
          </div>
        </Router>
      </CodeProvider>
    </ThemeProvider>
  );
}

export default App;
