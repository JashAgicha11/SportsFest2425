// backend/routes/leaderboard.js
const express = require("express");
const router = express.Router();
const Clan = require("../models/Clan");

// Route to get leaderboard data
router.get("/", async (req, res) => {
  try {
    const clans = await Clan.find().sort({ points: -1 }); // Sort by points descending
    res.json(clans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard" });
  }
});

module.exports = router;
