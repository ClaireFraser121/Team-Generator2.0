const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Call the constructor of the parent class (Employee)
    super(name, id, email);

    // Additional property specific to Engineer
    if (this.validateGitHub(github)) {
      this.github = github;
    } else {
      throw new Error('Invalid GitHub username. Please provide a valid username.');
    }
  }

  // Method to validate the GitHub username
  validateGitHub(github) {
    // Implement of validation logic 
    return /^[a-zA-Z0-9]+$/.test(github);
  }

  // Method to get the Engineer's GitHub username
  getGithub() {
    return this.github;
  }

  // Override the getRole() method to return 'Engineer'
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer class
module.exports = Engineer;
