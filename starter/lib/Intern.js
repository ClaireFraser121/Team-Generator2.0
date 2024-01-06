const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // Call the constructor of the parent class (Employee)
    super(name, id, email);

    // Additional property specific to Intern
    if (this.validateSchool(school)) {
      this.school = school;
    } else {
      throw new Error('Invalid school name. Please provide a valid name.');
    }
  }

  // Method to validate the school name
  validateSchool(school) {
    // Implement your validation logic here
    // For example, check if school name is non-empty
    return school.trim() !== '';
  }

  // Method to get the Intern's school
  getSchool() {
    return this.school;
  }

  // Override the getRole() method to return 'Intern'
  getRole() {
    return 'Intern';
  }
}

// Export the Intern class
module.exports = Intern;
