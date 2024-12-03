class Computer {
  powerOn() {
    console.log("Powering on the computer...");
  }

  loadOperatingSystem() {
    console.log("Loading operating system...");
  }

  boot() {
    this.powerOn();
    this.loadOperatingSystem();
  }
}

// Facade class
class ComputerFacade {
  constructor(computer) {
    this.computer = computer;
  }

  start() {
    this.computer.boot();
  }
}

// Client code
const myComputer = new Computer();
const facade = new ComputerFacade(myComputer);
facade.start();
// Output:
// Powering on the computer...
// Loading operating system...