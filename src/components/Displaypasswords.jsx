// src/components/DisplayPasswords.jsx
import React, { useEffect, useState } from 'react';

const DisplayPasswords = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('passwords')) || [];
    setEntries(saved);
  }, []);

  return (
    <div className="container">
      <h2>Saved Passwords</h2>
      <div className="cards-container">
        {entries.map((entry, index) => (
          <div key={index} className="card">
            <h3>{entry.website}</h3>
            <p><strong>Username:</strong> {entry.username}</p>
            <p><strong>Password:</strong> {entry.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayPasswords;
