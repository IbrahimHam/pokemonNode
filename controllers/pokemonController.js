const jsonData = require('../data/pokedex.json')

const getPokemon = (req, res) => {
    return res.json(jsonData);
}

const getPokemonById = async (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = jsonData.find(p => p.id === id);

    if (pokemon) {
        return res.json(pokemon);
    }
    return res.status(404).json({ error: "Pokemon not found" });
}

const getPokemonByIdAndInfo = (req, res) => {
    const id = parseInt(req.params.id);
    const info = req.params.info.toLowerCase();

    const pokemon = jsonData.find(p => p.id === id);

    if (pokemon) {
        if (pokemon[info]) {
            return res.json(pokemon[info]);
        } else if (pokemon.base && pokemon.base[info]) {
            return res.json(pokemon.base[info]);
        } else if (pokemon.name && pokemon.name[info]) {
            return res.json(pokemon.name[info]);
        } else {
            return res.status(404).json({ error: "Info not found" });
        }
    } else {
        return res.status(404).json({ error: "Pokemon not found" });
    }
}

module.exports = {
    getPokemon, getPokemonById, getPokemonByIdAndInfo
}


