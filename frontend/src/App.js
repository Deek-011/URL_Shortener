
import React, { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import "./App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return <div>{isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}</div>;
};

export default App;
