import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <div className="container">
      <motion.div
        className="card auth-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
