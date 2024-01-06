// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, github) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);

        // Additional property specific to Manager
    if (this.validateGitHub(github)) {
        this.github = github;
    } else {
        throw new Error('Invalid GitHub username. Please provide a valid username');
    }
}

    //Method to validate the GitHud username
    validateGitHub(github) {
        // Implement your validation logic here
        // For example, check if GitHub username is alphanumeric 
        return /^[a-zA-Z0-9]+$/.test(github);
    }

    // Method to get the Manager's office number
    getGithub() {
        return this.github;
    }

    // Override the getRole() method to return 'Manager'
    getRole() {
        return 'Engineer';
    }
}

// Export the Manager class
module.exports = Engineer;