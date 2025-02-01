import React from "react";
import "./settings.css";
import Sidebar from "./layouts/sidebar";
import Header from "./layouts/header";

export default function Settings() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar activePage="settings" />
      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <Header />

        {/* Settings Content */}
        <div className="settings-container">
          <form className="settings-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                defaultValue="Rahul Singh"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email id</label>
              <input
                type="email"
                id="email"
                className="form-input"
                defaultValue="rahulsingh@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile no.</label>
              <input
                type="tel"
                id="mobile"
                className="form-input"
                defaultValue="1234567890"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="save-button">
                Save Changes
              </button>
              <button type="button" className="delete-button">
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

