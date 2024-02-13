import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false); // State to handle redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        password
      });
      console.log('Signup response:', response); // Log the entire response object
      if (response && response.data !== undefined) {
        console.log('Signup successful:', response.data);
        setError('');
        setRedirect(true);
      } else {
        console.error('Signup error: Response data is undefined');
      }
    } catch (error) {
      console.error('Signup error:', error.response.data);
      setError(error.response.data.error || 'An error occurred during signup');
    }
  };

  if (redirect) {
    return <Navigate to="/dashboard" />; // Redirect to dashboard if redirect is true
  }

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default SignupForm;