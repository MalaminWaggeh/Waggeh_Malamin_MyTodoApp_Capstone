import React from 'react';
import './Dashboard.css'; // Import the CSS file directly
import TodosList from './TodosList';// Import the TodosList component
import { useReducer } from 'react';
import { initialState } from '../data/todosData'; // Import the initialState from todosData.js
import { todosReducer } from '../reducers/todosReducer'; // Import the todosReducer from todosReducer.js

const Dashboard = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState); // Initialize todos state and dispatch function

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-content">
        <h3>Welcome to the site!</h3>
        <TodosList todos={todos} dispatch={dispatch} /> {/* Render the TodosList component */}
      </div>
    </div>
  );
};

export default Dashboard;
