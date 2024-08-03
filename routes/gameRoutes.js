const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

router.post('/save', async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).send(game);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });
    res.status(200).send(games);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
