require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const leaderboardRoutes = require('./routes/leaderboard');
// const adminRoutes = require('./routes/admin');

const adminRoutes = require('./routes/admin');



const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/leaderboard', leaderboardRoutes);
// app.use('/api/admin', adminRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Backend server is running!');
  });



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require('express');
// const app = express();
// const adminRoutes = require('./routes/admin');

// // Middleware to parse JSON requests
// app.use(express.json());

// // Test route to handle root requests


// // Register admin routes
// app.use('/api/admin', adminRoutes);

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
