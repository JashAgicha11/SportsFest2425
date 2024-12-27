// backend/models/Clan.js
const mongoose = require("mongoose");

const ClanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true }
});

module.exports = mongoose.model("Clan", ClanSchema);
