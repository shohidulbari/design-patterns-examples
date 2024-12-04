const carPrototype = {
  make: 'Generic',
  model: 'Model X',
  year: 2020,
  start() {
    console.log(`${this.make} ${this.model} is starting...`);
  },
  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  },
  stop() {
    console.log(`${this.make} ${this.model} has stopped.`);
  },
  clone() {
    const clone = Object.create(this);
    return clone;
  }
};

const car1 = carPrototype.clone(); // Create object by copying the prototype
car1.make = 'Tesla';
car1.model = 'Model S';
car1.year = 2024;

const car2 = carPrototype.clone();
car2.make = 'BMW';
car2.model = 'X5';
car2.year = 2023;

console.log(`Car 1: ${car1.make} ${car1.model} (${car1.year})`);
car1.start(); // Output: Tesla Model S is starting...
car1.drive(); // Output: Tesla Model S is driving.

console.log(`Car 2: ${car2.make} ${car2.model} (${car2.year})`);
car2.start(); // Output: BMW X5 is starting...
car2.drive(); // Output: BMW X5 is driving...