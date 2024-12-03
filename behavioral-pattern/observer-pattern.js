class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this));
  }
}

class Observer {
  update(subject) {
    console.log("Observer updated, new state: " + subject.state);
  }
}

// Client code
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.state = "New State";
subject.notifyObservers();
// Output:
// Observer updated, new state: New State
// Observer updated, new state: New State