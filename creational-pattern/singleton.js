class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // If already available, return it without creating a new one
    }

    Singleton.instance = this; // Store the instance 
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