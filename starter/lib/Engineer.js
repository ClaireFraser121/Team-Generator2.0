// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, github) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);

        // Additional property specific to Manager
        this.github = github;
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