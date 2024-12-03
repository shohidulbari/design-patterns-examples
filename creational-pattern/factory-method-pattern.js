// Base class for vehicles
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`Vehicle type: ${this.name}`);
  }
}

// Specific vehicle classes
class Car extends Vehicle {
  constructor() {
    super("Car");
  }
}

class Bike extends Vehicle {
  constructor() {
    super("Bike");
  }
}

// Factory class
class VehicleFactory {
  static createVehicle(type) {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

// Client code
const myCar = VehicleFactory.createVehicle("car");
myCar.drive(); // Output: Car is driving.

const myBike = VehicleFactory.createVehicle("bike");
myBike.drive(); // Output: Bike is driving.