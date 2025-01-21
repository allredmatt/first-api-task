const fruitJSON = require('../fruits.json')

class Fruit {
    constructor({genus, name, id, family, order, nutritions}) {
        this.genus = genus, 
        this.name = name, 
        this.id = id, 
        this.family = family, 
        this.order = order, 
        this.nutritions = nutritions
    }
    
    static showAll() {
        return fruitJSON.map(fruit => new Fruit(fruit))
    }

    static show(name) {
        const oneFruit = fruitJSON.filter(fruit => fruit.name.toLowerCase() === name)
        if(oneFruit.length === 1){
            const fruit = new Fruit(oneFruit[0])
            return fruit
        } else {
            throw "No fruits of that name found in api"
        }
    }

    static create(newFruitData) {
        const newFruit = newFruitData
        const fruit = fruitJSON.find(fruit => fruit.name.toLowerCase() === newFruit.name.toLowerCase())
        if(fruit) {
            throw "Fruit already exists"
        } else {
            newFruit["id"] = fruitJSON.length + 1
            fruitJSON.push(newFruit)
            return new Fruit(newFruit)
        }
    }

    update(newFruitData) {
        const updatedFruit = fruitJSON.find(fruit => fruit.name.toLowerCase()  === this.name.toLowerCase())

        if(updatedFruit) {
            updatedFruit.name = newFruitData.name
            updatedFruit.family = newFruitData.family
            return new Fruit(updatedFruit)
        } else {
            throw Error("Fruit not found")
        }
    }

    destroy() {
        const deletedFruit = fruitJSON.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(deletedFruit) {
            const index = fruitJSON.indexOf(deletedFruit)
            fruitJSON.splice(index, 1)
        } else {
            throw Error("Fruit not found")
        }
    }

}

module.exports = Fruit