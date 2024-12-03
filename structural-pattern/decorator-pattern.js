// Basic functionality
class Coffee {
  cost() {
    return 5;
  }
}

// Decorator classes
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 0.5;
  }
}

// Client code
let myCoffee = new Coffee();
console.log(`Cost of coffee: $${myCoffee.cost()}`); // Output: Cost of coffee: $5

myCoffee = new MilkDecorator(myCoffee);
console.log(`Cost of coffee with milk: $${myCoffee.cost()}`); // Output: Cost of coffee with milk: $6

myCoffee = new SugarDecorator(myCoffee);
console.log(`Cost of coffee with milk and sugar: $${myCoffee.cost()}`); // Output: Cost of coffee with milk and sugar: $6.5