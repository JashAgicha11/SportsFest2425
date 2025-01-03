// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useStore from '../store/store';


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {setToastr} = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://sports-fest2425.vercel.app/api/admin/login', { email, password });
      const { token } = response.data;

      localStorage.setItem('adminToken', token);
      setToastr("Admin Login successful");
      navigate('/leaderboard');
    } catch (err) {
      setToastr("Invalid credentials. Please try again.");
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-nav-blue">
      <div className="bg-[#171923] border-2 border-[#3d4d5f] text-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 text-black p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 text-black p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
