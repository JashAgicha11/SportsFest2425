import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Invalid credentials');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Login successful:', data);
        navigate('/admin'); // Redirect to admin page
      })
      .catch((error) => {
        console.error('Error during login:', error.message);
        alert(error.message || 'An error occurred. Please try again.');
      });
    }    

  return (
    <div className="w-full h-[100vh] text-black flex justify-center items-center bg-[#171923]">
      <div>
        <h1 className="text-2xl text-white mb-4">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block mb-2 p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block mb-4 p-2 w-full"
        />
        <button
          onClick={login}
          className="bg-blue-500 px-5 py-2 rounded text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
