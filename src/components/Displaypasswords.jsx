// src/components/DisplayPasswords.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const DisplayPasswords = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('passwords')) || [];
    setEntries(stored);
  }, []);

  return (
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        📂 Saved Passwords
      </motion.h2>

      <div className="cards-container">
        {entries.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            No entries found 😕
          </motion.p>
        ) : (
          entries.map((entry, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3>🌐 {entry.website}</h3>
              <p>👤 <strong>Username:</strong> {entry.username}</p>
              <p>🔑 <strong>Password:</strong> {entry.password}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayPasswords;
