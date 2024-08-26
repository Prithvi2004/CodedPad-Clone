import React, { useContext, useEffect, useState } from "react";
import "./NotesPage.css";
import axios from "axios";
import { CodeContext } from "../context/CodeContext";
import { useNavigate } from "react-router-dom";

const NotesPage = () => {
  const navigate = useNavigate();
  const { code, setCode } = useContext(CodeContext);
  const [data, setData] = useState("");
  const BACKEND_URL = "http://13.201.97.3:8080/data";
  useEffect(() => {
    try {
      if (!code) {
        return navigate("/");
      }
      const response = axios.get(`${BACKEND_URL}/${code}`).then((res) => {
        res.data.error ? setData("") : setData(res.data.data);
      });
    } catch (error) {
      console.log("error in sending the get request");
    }
  }, []);

  const handleClose = () => {
    setCode("");
    navigate("/");
  };

  const handleSaveandClose = () => {
    handleSave();
    handleClose();
  };

  const handleSave = (e) => {
    try {
      const response = axios.post(`${BACKEND_URL}/${code}`, {
        data,
      });
    } catch (error) {
      console.log("error in sending the post request");
    }
  };
  return (
    <div className="notes-page">
      <header className="notes-header">
        <h2>You can edit, erase, and save your changes.</h2>
      </header>
      <div className="notes-content">
        <textarea
          placeholder="Type your notes here..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <div className="notes-options">
          <button onClick={handleSaveandClose}>Save & Close</button>
          <button onClick={handleSave}>Save</button>
          <button>Refresh</button>
          <button onClick={handleClose}>Close</button>
        </div>
        <div className="notes-info">
          <div className="lock-info">
            <h3>Instant Access</h3>
            <p>No signups or installs—just code.</p>
          </div>
          <div className="govt-proof-info">
            <h3>Seamless Simplicity</h3>
            <p>Simple, streamlined interface.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
