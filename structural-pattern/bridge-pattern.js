// Implementation (Concrete classes)
class Car {
  start() {
    console.log("Car starting...");
  }
}

class Bike {
  start() {
    console.log("Bike starting...");
  }
}

// Abstraction (Abstract class)
class Vehicle {
  constructor(implementor) {
    this.implementor = implementor;
  }

  start() {
    this.implementor.start();
  }
}

// Client code
const car = new Vehicle(new Car());
const bike = new Vehicle(new Bike());

car.start(); // Output: Car starting...
bike.start(); // Output: Bike starting...