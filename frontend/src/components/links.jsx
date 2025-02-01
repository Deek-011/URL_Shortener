import React from "react";
import "./links.css";
import logo from "../assets/download-2.png";
import Sidebar from "./layouts/sidebar";
import Header from "./layouts/header";

export default function Links() {
  const linksData = [
    {
      date: "Jan 14, 2025 16:30",
      originalLink: "https://www.trav...",
      shortLink: "https://c",
      remarks: "campaign1",
      clicks: 5,
      status: "Active",
    },
    {
      date: "Jan 14, 2025 05:45",
      originalLink: "https://www.trav...",
      shortLink: "https://c",
      remarks: "campaign2",
      clicks: 5,
      status: "Inactive",
    },
    {
      date: "Jan 14, 2025 07:43",
      originalLink: "https://www.trav...",
      shortLink: "https://c",
      remarks: "campaign3",
      clicks: 5,
      status: "Inactive",
    },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar activePage="links" />
      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <Header />

        {/* Links Table */}
        <div className="table-container">
          <table className="links-table">
            <thead>
              <tr>
                <th>
                  Date <span className="sort-icon">↓</span>
                </th>
                <th>Original Link</th>
                <th>Short Link</th>
                <th>Remarks</th>
                <th>Clicks</th>
                <th>
                  Status <span className="sort-icon">↓</span>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {linksData.map((link, index) => (
                <tr key={index}>
                  <td>{link.date}</td>
                  <td>{link.originalLink}</td>
                  <td>
                    {link.shortLink}
                    <button className="copy-button">📋</button>
                  </td>
                  <td>{link.remarks}</td>
                  <td>{link.clicks}</td>
                  <td>
                    <span
                      className={`status-badge ${link.status.toLowerCase()}`}
                    >
                      {link.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-button edit">✏️</button>
                      <button className="action-button delete">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button className="pagination-button" disabled>
              ←
            </button>
            <button className="pagination-button active">1</button>
            <button className="pagination-button">2</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-button">9</button>
            <button className="pagination-button">10</button>
            <button className="pagination-button">→</button>
          </div>
        </div>
      </main>
    </div>
  );
}

