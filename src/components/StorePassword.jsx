// src/components/StorePassword.jsx
import React, { useState } from 'react';

const StorePassword = () => {
  const [entries, setEntries] = useState([]);
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAddEntry = (e) => {
    e.preventDefault();
    const newEntry = { website, username, password };
    setEntries([...entries, newEntry]);
    setWebsite('');
    setUsername('');
    setPassword('');
    localStorage.setItem('passwords', JSON.stringify([...entries, newEntry]));
  };

  return (
    <div className="container">
      <h2>Password Manager</h2>
      <form onSubmit={handleAddEntry}>
        <input type="text" placeholder="Website or App" value={website} onChange={(e) => setWebsite(e.target.value)} required />
        <input type="text" placeholder="Username or Email" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default StorePassword;
