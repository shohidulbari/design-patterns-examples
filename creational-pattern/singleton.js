class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; 
    }

    Singleton.instance = this; // Save the instance
    this.data = "I am the singleton instance.";
  }

  getData() {
    return this.data;
  }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "I am the singleton instance."