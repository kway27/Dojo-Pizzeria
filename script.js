var pizza = {
    bread:    "hand tossed", "traditional", "deep dish",
    protein:  "peperoni", "sausage",
    cheese:   "provalone", "mozzerella", "feta",
    toppings: ["mushrooms", "olives", "marinara"]
};
    
console.log(pizza);

function pizzaOven(bread, protein, cheese, toppings) {
    var pizza = {};
    pizza.bread = bread;
    pizza.protein = protein;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven("hand tossed", "deep dish", "traditional", "provolone", "marinara" ["mazzarella", "peperoni", "sausage", "feta", "mushrooms", "olives"]);
console.log(p1);