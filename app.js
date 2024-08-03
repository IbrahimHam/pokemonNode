const express = require('express')
const dotnev = require('dotenv')
const pokemonRouter = require('./routes/pokemonRoutes')
const cors = require('cors')

dotnev.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.use('/pokemon', pokemonRouter)

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`app listining at http://localhost:${port}`)
})
