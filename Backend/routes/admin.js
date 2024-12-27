const express = require('express');
const router = express.Router();

// Admin login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Example credentials
  const adminUsername = 'admin';
  const adminPassword = 'password123';

  if (username === adminUsername && password === adminPassword) {
    return res.status(200).json({ message: 'Login successful', token: 'example-token' });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
