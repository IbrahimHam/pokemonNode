const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  pokemon1: String,
  pokemon2: String,
  winner: String,
  rounds: Number,
  pokemon1Image:String,
  pokemon2Image:String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Game', gameSchema);
