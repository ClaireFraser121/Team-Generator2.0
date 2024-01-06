// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, school) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);

        // Additional property specific to Manager
        this.school = school;
    }

    // Method to get the Manager's office number
    getSchool() {
        return this.school;
    }

    // Override the getRole() method to return 'Manager'
    getRole() {
        return 'Intern';
    }
}

// Export the Manager class
module.exports = Intern;