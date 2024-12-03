// Strategy Interface
class PaymentStrategy {
  pay(amount) {
    throw new Error("Method 'pay()' must be implemented.");
  }
}

// ConcreteStrategy 1: CreditCard
class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paying ${amount} using Credit Card.`);
  }
}

// ConcreteStrategy 2: PayPal
class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paying ${amount} using PayPal.`);
  }
}

// ConcreteStrategy 3: Bitcoin
class BitcoinPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paying ${amount} using Bitcoin.`);
  }
}

// Context: PaymentProcessor
class PaymentProcessor {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  executePayment(amount) {
    this.paymentStrategy.pay(amount);
  }
}

// Client code

const paymentProcessor = new PaymentProcessor(new CreditCardPayment());
paymentProcessor.executePayment(100);  // Output: Paying 100 using Credit Card.

paymentProcessor.setPaymentStrategy(new PayPalPayment());
paymentProcessor.executePayment(200);  // Output: Paying 200 using PayPal.

paymentProcessor.setPaymentStrategy(new BitcoinPayment());
paymentProcessor.executePayment(300);  // Output: Paying 300 using Bitcoin.