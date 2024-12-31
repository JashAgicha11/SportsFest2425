const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  clanName: { type: String, required: true },
  points: { type: Number, required: true },
});

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

const initializeLeaderboard = async () => {
  const existingData = await Leaderboard.find({});
  if (existingData.length === 0) {
    const defaultData = [
      { clanName: "clan1", points: 0 },
      { clanName: "clan2", points: 0 },
      { clanName: "clan3", points: 0 },
      { clanName: "clan4", points: 0 },
    ];
    await Leaderboard.insertMany(defaultData);
    console.log("Leaderboard initialized with default data");
  }
};

router.get("/", async (req, res) => {
  try {
    // Fetch all clans and sort them by points in descending order
    const leaderboard = await Leaderboard.find({}).sort({ points: -1 });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leaderboard data" });
  }
});


router.post("/update", async (req, res) => {
  const { clanName, action, points } = req.body;

  // Validation: Check required fields
  if (!clanName || !action || typeof points !== "number") {
    return res.status(400).json({ error: "Invalid request data" });
  }

  try {
    // Fetch the clan
    const clan = await Leaderboard.findOne({ clanName });
    if (!clan) {
      return res.status(400).json({ error: "Clan not found" });
    }

    // Update the clan points
    if (action === "increase") {
      clan.points += points;
    } else if (action === "decrease") {
      clan.points -= points;
      if (clan.points < 0) clan.points = 0; // Ensure points don't go below zero
    } else {
      return res
        .status(400)
        .json({ error: "Invalid action. Use 'increase' or 'decrease'." });
    }

    // Save updated clan points
    await clan.save();

    // Fetch updated leaderboard
    const updatedLeaderboard = await Leaderboard.find({});
    res.json({
      message: "Leaderboard updated successfully",
      leaderboard: updatedLeaderboard,
    });
  } catch (error) {
    console.error("Error updating clan points:", error);
    res.status(500).json({ error: "Failed to update clan points" });
  }
});

// Initialize default data
initializeLeaderboard();

module.exports = router;