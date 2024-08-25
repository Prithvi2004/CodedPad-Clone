import React from "react";
import "./NotesPage.css";

const NotesPage = () => {
  return (
    <div className="notes-page">
      <header className="notes-header">
        <h2>You can edit, erase, and save your changes.</h2>
      </header>
      <div className="notes-content">
        <textarea placeholder="Type your notes here..." />
        <div className="notes-options">
          <button>Save & Close</button>
          <button>Save</button>
          <button>Refresh</button>
          <button>Close</button>
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
