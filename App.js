import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'; // Updated import statement for SignupForm
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Todo App</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} /> {/* Render SignupForm for /signup route */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;