class Notification {
  sendEmail() {}
  sendSMS() {}
}

class EmailNotification extends Notification {
  sendEmail() {
    console.log("Email sent.");
  }
  sendSMS() {
    throw new Error("EmailNotification doesn't support SMS."); // Unnecessary implementation
  }
}

const emailNotification = new EmailNotification();
emailNotification.sendEmail(); // Works
emailNotification.sendSMS(); // Throws an error