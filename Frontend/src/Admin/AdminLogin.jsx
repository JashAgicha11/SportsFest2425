import React, { useState } from 'react';

const AdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const adminCredentials = {
    email: 'sportsclub@gmail.com',
    password: 'SF2425',
  };

  const handleLogin = () => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 rounded bg-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 rounded bg-gray-700"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleLogin}
        className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
