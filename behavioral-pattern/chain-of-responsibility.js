class Handler {
  constructor(successor = null) {
    this.successor = successor;
  }

  handleRequest(request) {
    if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

class ConcreteHandlerA extends Handler {
  handleRequest(request) {
    if (request === "A") {
      console.log("Handler A processed request");
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandlerB extends Handler {
  handleRequest(request) {
    if (request === "B") {
      console.log("Handler B processed request");
    } else {
      super.handleRequest(request);
    }
  }
}

// Client code
const handlerB = new ConcreteHandlerB();
const handlerA = new ConcreteHandlerA(handlerB);

handlerA.handleRequest("A"); // Output: Handler A processed request
handlerA.handleRequest("B"); // Output: Handler B processed request