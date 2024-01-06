// TODO: Write code to define and export the Employee class
// Employee class definition
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email;
    }

    // Method to get the employee's name
    getName() {
        return this.name;
    }

    // Method to get the employee's ID
    getId() {
        return this.id;
    }

    // Method to get the employee's email
    getEmail() {
        return this.email;
    }

    // Method to get the employee's role (always 'Employee' for the parent class)
    getRole() {
        return 'Employee';
    }
}

// Export the Employee class
module.exports = Employee;