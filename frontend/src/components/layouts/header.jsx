import React from "react";
import axios from "axios";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expirationEnabled, setExpirationEnabled] = React.useState(false);
  const [formData, setFormData] = React.useState({
    url: "",
    remarks: "",
    expirationDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted");

    try {
      const response = await axios.post(
        "http://localhost:8080/generateLink",
        formData,
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }

    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleExpirationToggle = (e) => {
    setExpirationEnabled(e.target.checked);
  };

  const handleDateChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      expirationDate: e.target.value,
    }));
  };

  return (
    <>
      <header className="header">
        <div className="greeting">
          <div className="greeting-text">
            <span className="star">⭐</span>
            Good morning, Sujith
          </div>
          <div className="date">Tue, Jan 25</div>
        </div>
        <div className="header-actions">
          <input
            type="search"
            placeholder="Search by remarks"
            className="search-input"
          />
          <button className="create-button" onClick={() => setIsOpen(true)}>
            + Create new
          </button>
          <button className="profile-button">SU</button>
        </div>
      </header>
      {isOpen && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div>
                  <label>URL</label>
                  <input
                    type="url"
                    name="url"
                    placeholder="Enter URL"
                    value={formData.url}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Remarks</label>
                  <input
                    type="text"
                    name="remarks"
                    placeholder="Enter text"
                    value={formData.remarks}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Toggle to enable/disable expiration date */}
                <div className="expiration-toggle">
                  <input
                    type="checkbox"
                    id="expirationToggle"
                    checked={expirationEnabled}
                    onChange={handleExpirationToggle}
                  />
                  <label htmlFor="expirationToggle">
                    Enable Expiration Date
                  </label>
                </div>

                {/* Expiration Date picker */}
                {expirationEnabled && (
                  <div>
                    <label>Expiration Date</label>
                    <input
                      type="date"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleDateChange}
                      min={new Date().toISOString().split("T")[0]} // Prevent past dates
                    />
                  </div>
                )}

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
            <button
              className="close-dialog-btn"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
