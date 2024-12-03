// Old system (incompatible interface)
class OldSystem {
  oldMethod() {
    console.log("Old system method");
  }
}

// New system (new interface)
class NewSystem {
  newMethod() {
    console.log("New system method");
  }
}

// Adapter to make NewSystem compatible with OldSystem
class Adapter {
  constructor(newSystem) {
    this.newSystem = newSystem;
  }

  oldMethod() {
    this.newSystem.newMethod();
  }
}

// Client code
const newSystem = new NewSystem();
const adapter = new Adapter(newSystem);
adapter.oldMethod(); // Output: New system method