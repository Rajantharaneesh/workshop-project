import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
