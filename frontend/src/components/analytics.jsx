import React from "react";
import "./analytics.css";
import Sidebar from "./layouts/sidebar";
import Header from "./layouts/header";

export default function Analytics() {
  const analyticsData = [
    {
      timestamp: "Jan 14, 2025 16:30",
      originalLink: "https://www.travelwiththejoneses...",
      shortLink: "https://cuvette.io/Bn41aCOlnxj",
      ipAddress: "192.158.1.38",
      userDevice: "Android",
    },
    {
      timestamp: "Jan 14, 2025 6:30",
      originalLink: "https://www.travelwiththejoneses...",
      shortLink: "https://cuvette.io/Bn41aCOlnxj",
      ipAddress: "192.158.1.38",
      userDevice: "Chrome",
    },
    {
      timestamp: "Jan 14, 2025 8:30",
      originalLink: "https://www.travelwiththejoneses...",
      shortLink: "https://cuvette.io/Bn41aCOlnxj",
      ipAddress: "192.158.1.38",
      userDevice: "ios",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar activePage="analytics" />
      <main className="main-content">
        <Header />

        <div className="analytics-container">
          <div className="analytics-table-wrapper">
            <table className="analytics-table">
              <thead>
                <tr>
                  <th className="sortable">
                    Timestamp
                    <span className="sort-icon">↓</span>
                  </th>
                  <th>Original Link</th>
                  <th>Short Link</th>
                  <th>ip address</th>
                  <th>User Device</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.timestamp}</td>
                    <td className="link-cell">{item.originalLink}</td>
                    <td className="link-cell">{item.shortLink}</td>
                    <td>{item.ipAddress}</td>
                    <td>{item.userDevice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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

