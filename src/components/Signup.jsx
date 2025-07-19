import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
