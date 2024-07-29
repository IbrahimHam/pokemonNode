const express = require('express')
const router = express.Router();
const { getPokemon, getPokemonById, getPokemonByIdAndInfo } = require('../controllers/pokemonController')

router.get('/', getPokemon)

router.get('/:id', getPokemonById)

router.get('/:id/:info', getPokemonByIdAndInfo)

module.exports = router;
