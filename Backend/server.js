// backend/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv"); // Load environment variables
const adminRoutes = require("./routes/admin");
const leaderboardRoutes = require("./routes/leaderboard");

dotenv.config(); 
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB using the URI from the .env file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/admin", adminRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
