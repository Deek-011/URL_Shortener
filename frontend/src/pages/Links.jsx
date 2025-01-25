import "./Links.css"
import { useState } from "react"

export default function Links() {
  const [links] = useState([
    {
      id: 1,
      date: "Jan 14, 2025 16:30",
      originalUrl: "https://www.travelwiththejoneses...",
      shortUrl: "https://c...",
      remarks: "campaign1",
      clicks: 5,
      status: "Active",
    },
    // Add more sample data
  ])

  return (
    <div className="links">
      <div className="links-table">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Original Link</th>
              <th>Short Link</th>
              <th>Remarks</th>
              <th>Clicks</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link) => (
              <tr key={link.id}>
                <td>{link.date}</td>
                <td>{link.originalUrl}</td>
                <td>
                  <div className="copy-link">
                    {link.shortUrl}
                    <button className="btn btn-ghost">
                      <svg className="btn-icon" /* Add copy icon SVG */></svg>
                    </button>
                  </div>
                </td>
                <td>{link.remarks}</td>
                <td>{link.clicks}</td>
                <td>
                  <span className={`status status--${link.status.toLowerCase()}`}>{link.status}</span>
                </td>
                <td>
                  <div className="actions">
                    <button className="btn btn-ghost">
                      <svg className="btn-icon" /* Add edit icon SVG */></svg>
                    </button>
                    <button className="btn btn-ghost">
                      <svg className="btn-icon" /* Add delete icon SVG */></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

