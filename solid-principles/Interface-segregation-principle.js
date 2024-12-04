class Notification {
  sendEmail() {
    throw new Error("Method 'sendEmail()' must be implemented.");
  }
  sendSMS() {
    throw new Error("Method 'sendSMS()' must be implemented.");
  }
}

class EmailNotification extends Notification {
  sendEmail() {
    console.log("Email sent.");
  }

  // Force to implement, otherwise raised error
  // sendSMS() { }
}

const emailNotification = new EmailNotification();
emailNotification.sendEmail(); // Works
emailNotification.sendSMS(); // Throws an error