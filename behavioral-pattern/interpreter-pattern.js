class Expression {
  interpret(context) {}
}

class TerminalExpression extends Expression {
  constructor(data) {
    super();
    this.data = data;
  }

  interpret(context) {
    return context.includes(this.data);
  }
}

class OrExpression extends Expression {
  constructor(expr1, expr2) {
    super();
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  interpret(context) {
    return this.expr1.interpret(context) || this.expr2.interpret(context);
  }
}

// Client code
const isJohn = new TerminalExpression("John");
const isDoe = new TerminalExpression("Doe");
const isJohnOrDoe = new OrExpression(isJohn, isDoe);

console.log(isJohnOrDoe.interpret("John Smith")); // true
console.log(isJohnOrDoe.interpret("Jane Doe")); // true