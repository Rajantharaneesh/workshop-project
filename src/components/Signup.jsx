// src/components/Signup.jsx
import React from 'react';
import { motion } from 'framer-motion';
 // Ensure this path matches your file

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle signup logic here
  };

  return (
    <div className="container">
      <motion.div
        className="card auth-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>📝 Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>👤 Full Name</label>
          <input type="text" placeholder="John Doe" required />

          <label>📧 Email</label>
          <input type="email" placeholder="example@email.com" required />

          <label>🔑 Password</label>
          <input type="password" placeholder="Create a strong password" required />

          <button type="submit">✅ Create Account</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
