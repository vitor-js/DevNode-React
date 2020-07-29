const express = require('express')
const route = require('./routes')

const db = require('../src/models/index')

const app = express()
app.use(route)

db.sequelize.sync().then(
    (()=>{
        app.listen(3001, () => {
            console.log('listening on port 3001')
        })
    })
)
