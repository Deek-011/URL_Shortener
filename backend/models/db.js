//  mongo :: apdfB7Os0dFJo2Ck

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // No additional options needed
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the process with a failure code
  }
};

connectDB();
