const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({Mensagem:'Olá, Mundo'})
})

app.listen(3001, () => {
    console.log('listening on port 3001')
})