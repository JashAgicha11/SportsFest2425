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
    const leaderboard = await Leaderboard.find({});
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leaderboard data" });
  }
});

router.post("/update", async (req, res) => {
  const { clanName, action, points } = req.body;

  try {
    const clan = await Leaderboard.findOne({ clanName });
    if (!clan) {
      return res.status(400).json({ error: "Invalid clan name" });
    }

    if (action === "increase") {
      clan.points += points;
    } else if (action === "decrease") {
      clan.points -= points;
    } else {
      return res.status(400).json({ error: "Invalid action (use increase or decrease)" });
    }

    await clan.save();

    const updatedLeaderboard = await Leaderboard.find({});
    res.json({ message: "Leaderboard updated successfully", leaderboard: updatedLeaderboard });
  } catch (error) {
    res.status(500).json({ error: "Failed to update leaderboard" });
  }
});

initializeLeaderboard();

module.exports = router;
