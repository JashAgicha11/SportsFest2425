const express = require('express');
const router = express.Router();
const Clan = require('../models/Clan');

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const clans = await Clan.find().sort({ points: -1 });
    res.json(clans);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
