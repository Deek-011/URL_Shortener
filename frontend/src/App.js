import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login"; // Import Login
import Dashboard from "./components/dashboard"; // Import Dashboard
import Signup from "./components/signup";
import Links from "./components/links"
import Settings from "./components/settings";
import Analytics from "./components/analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />  {/* Signup route */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard route */}
        <Route path="/login" element={<Login />} />  {/* Login route */}
        <Route path="/links" element={<Links />} />  {/* Login route */}
        <Route path="/settings" element={<Settings />} />  {/* Login route */}
        <Route path="/analytics" element={<Analytics />} /> 
      </Routes>
    </Router>
  );
}

export default App;
