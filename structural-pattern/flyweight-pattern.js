class Car {
  constructor(model) {
    this.model = model;
  }

  display(owner) {
    console.log(`${owner} owns a ${this.model}`);
  }
}

class CarFactory {
  constructor() {
    this.cars = {};
  }

  getCar(model) {
    if (!this.cars[model]) {
      this.cars[model] = new Car(model);
    }
    return this.cars[model];
  }
}

// Client code
const factory = new CarFactory();

const car1 = factory.getCar("Toyota");
car1.display("Alice"); // Output: Alice owns a Toyota

const car2 = factory.getCar("Toyota");
car2.display("Bob"); // Output: Bob owns a Toyota

console.log(car1 === car2); // true, as the same instance is reused