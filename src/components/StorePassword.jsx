// src/components/StorePassword.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const StorePassword = () => {
  const [entries, setEntries] = useState([]);
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('passwords')) || [];
    setEntries(saved);
  }, []);

  const handleAddEntry = (e) => {
    e.preventDefault();
    const newEntry = { website, username, password };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem('passwords', JSON.stringify(updatedEntries));
    setWebsite('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>🔐 Password Manager</h2>
        <form onSubmit={handleAddEntry}>
          <label>🌐 Website or App</label>
          <input
            type="text"
            placeholder="e.g. facebook.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />

          <label>👤 Username or Email</label>
          <input
            type="text"
            placeholder="e.g. user@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>🔑 Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">➕ Add Entry</button>
        </form>
      </motion.div>
    </div>
  );
};

export default StorePassword;
