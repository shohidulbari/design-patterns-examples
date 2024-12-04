// The Bridge Pattern is used when you have two dimensions of variability (e.g., types of vehicles and how they are started or operated)

// Implementor
class Engine {
  startEngine() {
    throw new Error("The method startEngine() must be implemented");
  }
}

// Concrete Implementors
class CarEngine extends Engine {
  startEngine() {
    console.log("Car engine starting...");
  }
}

class BikeEngine extends Engine {
  startEngine() {
    console.log("Bike engine starting...");
  }
}

// Abstraction
class Vehicle {
  constructor(engine) {
    this.engine = engine;
  }

  start() {
    console.log("Vehicle starting...");
    this.engine.startEngine();
  }
}

// Refined Abstraction
class Car extends Vehicle {
  constructor(engine) {
    super(engine);
  }

  start() {
    console.log("Car is getting ready to start.");
    super.start();
  }
}

class Bike extends Vehicle {
  constructor(engine) {
    super(engine);
  }

  start() {
    console.log("Bike is getting ready to start.");
    super.start();
  }
}

// Client code
const car = new Car(new CarEngine());
car.start();
// Output:
// Car is getting ready to start.
// Vehicle starting...
// Car engine starting...

const bike = new Bike(new BikeEngine());
bike.start();
// Output:
// Bike is getting ready to start.
// Vehicle starting...
// Bike engine starting...