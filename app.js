const express = require('express')
const dotnev = require('dotenv')
const pokemonRouter = require('./routes/pokemonRoutes')
const gameRoutes = require('./routes/gameRoutes');
const cors = require('cors')
const db = require('./db/client')

dotnev.config();

const app = express();
const port = process.env.PORT || 5000;
db();

app.use(cors())
app.use(express.json());

app.use('/pokemon', pokemonRouter)
app.use('/game', gameRoutes);

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`app listining at http://localhost:${port}`)
})
