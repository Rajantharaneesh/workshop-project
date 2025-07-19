// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StorePassword from './components/StorePassword';
import DisplayPasswords from './components/Displaypasswords';
import Login from './components/Login';
import Signup from './components/Signup';
import './index.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Store Password</Link>
        <Link to="/view">View Passwords</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StorePassword />} />
        <Route path="/view" element={<DisplayPasswords />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
