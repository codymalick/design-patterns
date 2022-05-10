// https://sourcemaking.com/design_patterns/builder

class Burger {
    meat: boolean
    buns: boolean
    cheese: boolean
    sauces: boolean

    constructor() {

    }
}

type Fries = Object;
type Drink = "Coke" | "Sprite" | "Water"
type Toy = "Batman" | "Superman"


class HappyMeal {
    burger: Burger; 
    fries: Fries;
    drink: Drink;
    toy: Toy;

    addBurger(burger: Burger) {
        this.burger = burger
        return this // return this to allow function chaining! Fancy!
    }

    addFries(fries: Fries) {
        this.fries = fries
        return this
    }

    addDrink(drink: Drink) {
        this.drink = drink
        return this
    }

    addToy(toy: Toy) {
        this.toy = toy
        return this
    }
}


// Lets create a happy meal
const happyMeal = new HappyMeal();

// Classic way of instantiating an object, must specify all portions
const burger: Burger = {
    meat: true,
    buns: true,
    cheese: false,
    sauces: false
}

const fries = undefined

// Builder pattern allows us to conditionally add portions to the object
happyMeal.addBurger(burger)
         .addDrink('Coke')

if(fries) happyMeal.addFries(fries)

happyMeal.addToy('Superman')