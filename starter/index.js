const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

async function startApp() {
    let inquirer;
    try {
        // Attempt to use dynamic import for ESM support
        inquirer = await import("inquirer");
    } catch (err) {
        // Fallback to regular require for CommonJS
        inquirer = require("inquirer");
    }

    const path = require("path");
    const fs = require("fs");

    const OUTPUT_DIR = path.resolve(__dirname, "output");
    const outputPath = path.join(OUTPUT_DIR, "team.html");

    const render = require("./src/page-template.js");

    // TODO: Write Code to gather information about the development team members, and render the HTML file.

    // Array to store team members 
    const teamMembers = [];

    // Prompt for manager information
    const managerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's office number:",
        },
    ];

    const menuQuestion = {
        type: "list",
        name: "menuChoice",
        message: "What would you like to do next?",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    };

    const engineerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:",
        },
    ];

    const internQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's ID"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email:",
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:",
        },
    ];

    const managerAnswers = await inquirer.createPromptModule(managerQuestions);
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    teamMembers.push(manager);

    let menuChoice = "";
    while (menuChoice !== "Finish building the team") {
        // Prompt for menu choice
        const menuAnswer = await inquirer.createPromptModule(menuQuestion);
        menuChoice = menuAnswer.menuChoice;

        // Process user choice
        if (menuChoice === "Add an engineer") {
            const engineerAnswers = await inquirer.createPromptModule(engineerQuestions);
            teamMembers.push(Engineerngineer);
        } else if (menuChoice === "Add an intern") {
            const internAnswers = await inquirer.createPromptModule(internQuestions);
            const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            teamMembers.push(intern);
        }

    }


    // Render HTML using the team members
    const renderedHtml = render(teamMembers);

    // Write HTML to output file
    fs.writeFileSync(outputPath, renderedHtml);

    console.log(`Team HTML file generated at ${outputPath}`);

}

// Call the asynchronous function to start the application
startApp();
