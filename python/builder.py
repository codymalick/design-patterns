# https://sourcemaking.com/design_patterns/builder
import json

class Burger():
    def __init__(self, meat, buns, cheese, sauces):
        self.meat = meat
        self.buns = buns
        self.cheese = cheese
        self.sauces = sauces
    
    def __repr__(self):
        return str(self.__dict__)

fries = "some fries"
drink = "Coke"
toy = "Batman"

class HappyMeal():
    def add_burger(self, burger):
        self.burger = burger
        return self
    
    def add_fries(self, fries):
        self.fries = fries
        return self
    
    def add_drink(self, drink):
        self.drink = drink
        return self
    
    def add_toy(self, toy):
        self.toy = toy
        return self
    
    def __repr__(self):
        return str(self.__dict__)

happy_meal = HappyMeal()
burger = Burger(True, True, False, False)

happy_meal.add_burger(burger).add_drink(drink)

if(fries):
    happy_meal.add_fries(fries)

happy_meal.add_toy(toy)

print(happy_meal)