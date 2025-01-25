import React, { useState } from "react";
import axios from "axios";
import "./login.css";

import logoImage from "../assets/download-2.png";  
import backgroundImage from "../assets/m-image.png";  

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      // Store token and user info in local storage or state
      localStorage.setItem("token", response.data.jwtToken);
      alert("Login successful!");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="image-section">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="form-card">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
        </form>
        <button onClick={toggleForm} className="toggle-link">
          Don't have an account? SignUp
        </button>
      </div>
    </div>
  );
};

export default Login;
