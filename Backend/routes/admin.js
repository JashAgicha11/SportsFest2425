// backend/routes/admin.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Clan = require("../models/Clan");
const verifyAdmin = require("../middleware/authMiddleware"); 

const ADMIN_EMAIL = "sportsfest@gmail.com";
const ADMIN_PASSWORD = "admin123"; 

// Simple admin login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, "secret_key", { expiresIn: "1h" });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});


module.exports = router;
