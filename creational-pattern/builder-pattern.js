// Step 1: Define the complex object that needs to be built
class Car {
  constructor(make, model, year, color, engineType, hasSunroof) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.engineType = engineType;
    this.hasSunroof = hasSunroof;
  }

  displayCarInfo() {
    console.log(`${this.year} ${this.make} ${this.model} (${this.color})`);
    console.log(`Engine: ${this.engineType}`);
    console.log(`Sunroof: ${this.hasSunroof ? "Yes" : "No"}`);
  }
}

// Step 2: Define the Builder class
class CarBuilder {
  constructor(make, model) {
    this.car = new Car(make, model);  // Creating the car object with the basic properties
  }

  setYear(year) {
    this.car.year = year;
    return this;  // Return the builder to allow chaining
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setEngineType(engineType) {
    this.car.engineType = engineType;
    return this;
  }

  setHasSunroof(hasSunroof) {
    this.car.hasSunroof = hasSunroof;
    return this;
  }

  build() {
    return this.car;  // Return the constructed car object
  }
}

// Step 3: Client code to use the builder pattern
const myCar = new CarBuilder("Toyota", "Camry")
  .setYear(2024)
  .setColor("Silver")
  .setEngineType("Hybrid")
  .setHasSunroof(true)
  .build();

myCar.displayCarInfo();
// Output:
// 2024 Toyota Camry (Silver)
// Engine: Hybrid
// Sunroof: Yes

const anotherCar = new CarBuilder("Honda", "Civic")
  .setYear(2023)
  .setColor("Blue")
  .setEngineType("Petrol")
  .setHasSunroof(false)
  .build();

anotherCar.displayCarInfo();
// Output:
// 2023 Honda Civic (Blue)
// Engine: Petrol
// Sunroof: No