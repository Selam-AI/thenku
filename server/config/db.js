/** @format */

const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to mongoDB ${mongoose.connection.host}`.bgGreen.white,
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
