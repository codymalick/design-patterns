// https://sourcemaking.com/design_patterns/builder
// to run: ts-node typescript/builder.ts

class Burger {
    meat: boolean = false
    buns: boolean = false
    cheese: boolean = false
    sauces: boolean = false

    constructor(meat: boolean, buns: boolean, cheese: boolean, sauces: boolean) {
        this.meat = meat
        this.buns = buns
        this.cheese = cheese
        this.sauces = sauces
    }
}

type Fries = Object;
type Drink = "Coke" | "Sprite" | "Water"
type Toy = "Batman" | "Superman"


class HappyMeal {
    burger?: Burger = undefined 
    fries?: Fries = undefined
    drink?: Drink = undefined
    toy?: Toy = undefined

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
console.log(JSON.stringify(happyMeal, undefined, '\t'))