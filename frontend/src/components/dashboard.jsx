import React from "react";
import "./dashboard.css";
import Sidebar from "./layouts/sidebar";
import Header from "./layouts/header";

export default function Dashboard() {
  const dateData = [
    { date: "21-01-25", clicks: 1234 },
    { date: "20-01-25", clicks: 1140 },
    { date: "19-01-25", clicks: 134 },
    { date: "18-01-25", clicks: 34 },
  ];

  const deviceData = [
    { device: "Mobile", clicks: 134 },
    { device: "Desktop", clicks: 40 },
    { device: "Tablet", clicks: 3 },
  ];

  if (localStorage.getItem("token") === null) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar activePage="dashboard" />

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="total-clicks-card">
            <h2>Total Clicks</h2>
            <div className="clicks-number">1234</div>
          </div>

          <div className="charts-grid">
            {/* Date-wise Clicks */}
            <div className="card">
              <h2>Date-wise Clicks</h2>
              <div className="chart">
                {dateData.map((item) => (
                  <div key={item.date} className="chart-row">
                    <div className="chart-label">{item.date}</div>
                    <div className="chart-bar-container">
                      <div
                        className="chart-bar"
                        style={{ width: `${(item.clicks / 1234) * 100}%` }}
                      />
                    </div>
                    <div className="chart-value">{item.clicks}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Click Devices */}
            <div className="card">
              <h2>Click Devices</h2>
              <div className="chart">
                {deviceData.map((item) => (
                  <div key={item.device} className="chart-row">
                    <div className="chart-label">{item.device}</div>
                    <div className="chart-bar-container">
                      <div
                        className="chart-bar"
                        style={{ width: `${(item.clicks / 134) * 100}%` }}
                      />
                    </div>
                    <div className="chart-value">{item.clicks}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

