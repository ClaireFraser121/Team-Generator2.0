// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);

        // Additional property specific to Manager
        if (this.validateOfficeNumber(officeNumber)) {
            this.officeNumber = officeNumber;
        } else {
            throw new Error('Invalid office number. Please provide a valid number.');
        }

    }


    // Method to validate the office number
    validateOfficeNumber(officeNumber) {
      if (typeof officeNumber === 'number' && Number.isInteger(officeNumber) && officeNumber >= 0 ) {
        return true;
      } else if (typeof officeNumber === 'string' && officeNumber.trim() !== '') {
        return true
      } else {
        return false;
      }
    }

    // Method to get the Manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override the getRole() method to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

// Export the Manager class
module.exports = Manager;