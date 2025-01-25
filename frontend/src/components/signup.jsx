import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

// Import images from the assets folder
import logoImage from "../assets/download-2.png";  // Import the logo image
import backgroundImage from "../assets/m-image.png";  // Import the background image

const Signup = ({ toggleForm }) => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Send the data to the backend using POST request
      const response = await axios.post("http://localhost:8080/auth/signup", {
        name,
        email,
        mobilenumber,
        password,
      });

      // Show success message if signup is successful
      setSuccessMessage(response.data.message);
      setError(""); // Clear any previous error
    } catch (error) {
      // Handle any errors (e.g., user already exists)
      setError(error.response?.data?.message || "Something went wrong.");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="image-section">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="form-card">
        <h2>Join us Today!</h2>

        {/* Show success or error messages */}
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Mobile no."
            value={mobilenumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="primary" type="submit">Register</button>
        </form>

        <button onClick={toggleForm} className="toggle-link">
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
