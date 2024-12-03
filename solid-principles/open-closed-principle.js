// Bad Implementation
// class PaymentProcessor {
//   processPayment(type, amount) {
//     if (type === "creditCard") {
//       console.log(`Processing credit card payment of $${amount}`);
//       // Logic for credit card payment
//     } else if (type === "paypal") {
//       console.log(`Processing PayPal payment of $${amount}`);
//       // Logic for PayPal payment
//     } else {
//       throw new Error("Unsupported payment method");
//     }
//   }
// }


class PaymentMethod {
  process(amount) {
    throw new Error("Method 'process()' must be implemented");
  }
}

class CreditCardPayment extends PaymentMethod {
  process(amount) {
    console.log(`Processing credit card payment of $${amount}`);
    // Logic for credit card payment
  }
}

class PayPalPayment extends PaymentMethod {
  process(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
    // Logic for PayPal payment
  }
}

class GooglePayPayment extends PaymentMethod {
  process(amount) {
    console.log(`Processing Google Pay payment of $${amount}`);
    // Logic for Google Pay payment
  }
}

class PaymentProcessor {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  processPayment(amount) {
    this.paymentMethod.process(amount);
  }
}

const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();
const googlePayPayment = new GooglePayPayment();

const processor1 = new PaymentProcessor(creditCardPayment);
processor1.processPayment(100);
const processor2 = new PaymentProcessor(paypalPayment);
processor2.processPayment(50);

const processor3 = new PaymentProcessor(googlePayPayment);
processor3.processPayment(30); 
