// backend/routes/admin.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Clan = require("../models/Clan");
const verifyAdmin = require("../middleware/authMiddleware");  // Import the middleware

const ADMIN_EMAIL = "sportsfest@gmail.com";
const ADMIN_PASSWORD = "admin123"; // Change this to a better password in production

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

// Protected route to update clan points
router.put("/update", verifyAdmin, async (req, res) => {
  const { clanId, points } = req.body;

  try {
    const clan = await Clan.findById(clanId);
    if (!clan) return res.status(404).json({ message: "Clan not found" });

    clan.points += points; // Add points (can be +3, +5, etc.)
    await clan.save();
    res.json(clan);
  } catch (error) {
    res.status(500).json({ message: "Error updating points" });
  }
});

module.exports = router;
