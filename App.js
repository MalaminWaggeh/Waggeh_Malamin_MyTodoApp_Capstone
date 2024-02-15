import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AboutMe from './components/AboutMe'; 

function App() {
  return (
    <Router>
      <div style={{
        background: "url('https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png') no-repeat center center fixed",
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutme" element={<AboutMe />} /> {/* Add the AboutMe route */}
          {/* other routes... */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;