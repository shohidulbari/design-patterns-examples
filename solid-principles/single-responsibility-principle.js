// A class should have one and only one reason to change
// Each module or class should focus on a single responsibilty or task

class User {
  constructor(name, email) {
    this.name = name
    this.email = email;
  }


class UserRepository {
  save(user) {
    console.log(`Saving user ${user.name} to the database.`);
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.email}.`);
  }
}

const user = new User("John Doe", "john.doe@example.com");
const userRepository = new UserRepository();
const emailService = new EmailService();

userRepository.save(user);
emailService.sendWelcomeEmail(user);
