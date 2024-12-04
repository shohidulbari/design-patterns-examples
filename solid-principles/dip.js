
// Without DIP
// class EmailService {
//   send(message) {
//     console.log(`Sending email: ${message}`);
//   }
// }

// class SMSService {
//   send(message) {
//     console.log(`Sending SMS: ${message}`);
//   }
// }

// class NotificationService {
//   constructor() {
//     this.emailService = new EmailService();
//     this.smsService = new SMSService();
//   }

//   notifyByEmail(message) {
//     this.emailService.send(message);
//   }

//   notifyBySMS(message) {
//     this.smsService.send(message);
//   }
// }

// const notificationService = new NotificationService();
// notificationService.notifyByEmail("Hello via Email!");
// notificationService.notifyBySMS("Hello via SMS!");


class INotificationService {
  send(message) {
    throw new Error("Method 'send()' must be implemented.");
  }
}

class EmailService extends INotificationService {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

class SMSService extends INotificationService {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificationService {
  constructor(notificationService) {
    this.notificationService = notificationService; // Dependency Injection
  }

  notify(message) {
    this.notificationService.send(message);
  }
}

const emailNotification = new NotificationService(new EmailService());
emailNotification.notify("Hello via Email!");

const smsNotification = new NotificationService(new SMSService());
smsNotification.notify("Hello via SMS!");