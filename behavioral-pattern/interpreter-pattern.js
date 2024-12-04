// Abstract Expression
class Expression {
  interpret(context) {
    throw new Error("This method must be implemented");
  }
}

// Terminal Expression: Numbers
class NumberExpression extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  interpret(context) {
    return this.value;
  }
}

// Non-Terminal Expression: Addition
class AddExpression extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(context) {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

// Non-Terminal Expression: Multiplication
class MultiplyExpression extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(context) {
    return this.left.interpret(context) * this.right.interpret(context);
  }
}

// Client Code
const context = {}; // Context can hold variables or state if needed

// Build the expression: (2 + 3) * 4
const expression = new MultiplyExpression(
  new AddExpression(
    new NumberExpression(2),
    new NumberExpression(3)
  ),
  new NumberExpression(4)
);

// Interpret the expression
const result = expression.interpret(context);
console.log(`Result: ${result}`); // Output: Result: 20