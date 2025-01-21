const express = require('express')
const app = express()
const logger = require('./logger')

//middleware
app.use(express.json())
app.use(logger)

const fruitRouter = require("./routes/fruits")

app.get('/', (req, res) => {
  res.send('Hello Fruity')
})

app.use('/fruits', fruitRouter)

module.exports = app
