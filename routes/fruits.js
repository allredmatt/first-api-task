const express = require("express")
const fruitRouter = express.Router()
const fruits = require('../controllers/fruits')

fruitRouter.get("/", fruits.index)
fruitRouter.get("/:name", fruits.show)
fruitRouter.post("/", fruits.create)
fruitRouter.patch("/:name", fruits.update)
fruitRouter.delete("/:name", fruits.destroy)

module.exports = fruitRouter