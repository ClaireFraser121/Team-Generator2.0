// Generic function to prompt for information

const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const promptForInformation = async (questions) => {
    const answers = await inquirer.prompt(questions);
    return answers;
};


const createManager = async () => {
    // Manager questions
    const managerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name:",
            validate: function (name) {
                return /^[a-zA-Z\s]+$/.test(name) || "Please enter a valid name containing only letters and spaces.";
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email:",
            validate: function (email) {
                // Basic email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || 'Please enter a valid email address';
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number:",
            validate: function (officeNumber) {
                // Define regex patterns for different phone number formats
                const mobilePattern = /^[0-9]{11}$/; // Assuming a 11-digit mobile number
                const landlinePattern = /^[0-9]{7,}$/; // Assuming at least 7 digits for a landline
                const internalPattern = /^internal-[0-9]+$/i; // Assuming an internal number like 'internal-123'
                const internationalPattern = /^\+[0-9]+$/; // Assuming an international number starting with '+'
    
                // Check if the entered number matches any of the patterns
                if (mobilePattern.test(officeNumber)) {
                    return true; // Valid mobile number
                } else if (landlinePattern.test(officeNumber)) {
                    return true; // Valid landline number
                } else if (internalPattern.test(officeNumber)) {
                    return true; // Valid internal number
                } else if (internationalPattern.test(officeNumber)) {
                    return true; // Valid international number
                } else {
                    return "Please enter a valid phone number (mobile, landline, internal, or international).";
                }
            },
        },
    ];

    const managerAnswers = await promptForInformation(managerQuestions);
    return new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
};

const createEngineer = async () => {
    // Engineer questions
    const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name:",
            validate: function (name) {
                return /^[a-zA-Z\s]+$/.test(name) || "Please enter a valid name containing only letters and spaces.";
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email:",
            validate: function (email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || 'Please enter a valid email address';
            },
        },
        {
            type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub username:",
        validate: function (github) {
            // Ensure the GitHub username consists of alphanumeric characters and hyphens
            return /^[a-zA-Z0-9-]+$/.test(github) || "Please enter a valid GitHub username containing only letters, numbers, and hyphens.";
        },
    },
    ];
    const engineerAnswers = await promptForInformation(engineerQuestions);
    return new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
};

const createIntern = async () => {
    // Intern questions
    const internQuestions = [
        {
            type: "input",
        name: "name",
        message: "Enter the intern's name:",
        validate: function (name) {
            return /^[a-zA-Z\s]+$/.test(name) || "Please enter a valid name containing only letters and spaces.";
        },
    },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email:",
            validate: function (email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || 'Please enter a valid email address';
            },
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:",
            validate: function (school) {
                return /^[a-zA-Z\s]+$/.test(school) || "Please enter a valid school name containing only letters and spaces.";
            },
        },
    ];
    const internAnswers = await promptForInformation(internQuestions);
    return new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
};


// Add an async function for menuQuestion
const getMenuChoice = async () => {
    const menuQuestion = {
        type: "list",
        name: "menuChoice",
        message: "What would you like to do next?",
        choices: ["Add a manager", "Add an engineer", "Add an intern", "Finish building the team"],
    };

    const menuAnswer = await inquirer.prompt(menuQuestion);
    return menuAnswer.menuChoice;
};

module.exports = {
    promptForInformation,
    createManager,
    createEngineer,
    createIntern,
    getMenuChoice,
};