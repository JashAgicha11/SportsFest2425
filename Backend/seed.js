require('dotenv').config();
const mongoose = require('mongoose');
const Clan = require('./models/Clan'); // Import Clan model

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const clans = [
      { name: 'Clan A', points: 50 },
      { name: 'Clan B', points: 30 },
      { name: 'Clan C', points: 20 },
      { name: 'Clan D', points: 10 },
    ];

    await Clan.insertMany(clans);
    console.log('Data seeded successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
