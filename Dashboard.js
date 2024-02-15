import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { Link } from 'react-router-dom';
import './Dashboard.css'; 
import TodosList from './TodosList';
import { useReducer } from 'react';
import { initialState } from '../data/todosData'; 
import { todosReducer } from '../reducers/todosReducer'; 
 // store the quote
const Dashboard = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState); 
  const [quote, setQuote] = useState('');

  // fetch quote when component mounts
  useEffect(() => {
    fetch('https://api.quotable.io/random') 
      .then(response => response.json())
      .then(data => setQuote(data.content));
  }, []);

  return (
    <div>
      <nav className="navbar">
        <h2 className="navbar-title">Dashboard</h2>
        <Link to="/aboutme" className="aboutme-link">
          <button>About Me</button>
        </Link>
      </nav>

      <div className="dashboard-container">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="dashboard-content">
          <h3>Quote of the day: {quote}</h3> 
          <h3>Todos!</h3>
          <TodosList todos={todos} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;