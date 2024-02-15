import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <h2>About Me</h2>
      <p>I am an upcoming software engineer with a passion for computers and technology.</p>
      <p>Email: Suprememal123@gmail.com</p>
      <p>Github: <a href="https://github.com/MalaminWaggeh">https://github.com/MalaminWaggeh</a></p>
      <Link to="/dashboard">
        <button>Back to Todos</button>
      </Link>
    </div>
  );
};

export default AboutMe;