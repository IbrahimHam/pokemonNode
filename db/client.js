const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const db = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
};

module.exports = db;