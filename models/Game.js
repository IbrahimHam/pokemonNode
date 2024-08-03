const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  pokemon1: String,
  pokemon2: String,
  winner: String,
  rounds: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Game', gameSchema);
