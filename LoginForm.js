import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      console.log("Login response:", response.data);
      // if succesful send user to dashboard if not display error
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.response.data);
      setError(error.response.data.error || "An error occurred during login");
    }
  };

  return (
    <div className="login-container">
      {" "}
      
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        {" "}
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
