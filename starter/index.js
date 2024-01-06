const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");  // Use require for CommonJS modules
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");


// Array to store team members
const teamMembers = [];

async function startApp() {
  const OUTPUT_DIR = path.resolve(__dirname, "output");
  const outputPath = path.join(OUTPUT_DIR, "team.html");

  // Check if the folder already exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    // If not, create the folder
    fs.mkdirSync(OUTPUT_DIR);
    console.log("Output folder created successfully.");
  } else {
    console.log("Output folder already exists.");
  }

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
        name: "officeNumber",
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
        message: "Enter the intern's ID",
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


const managerAnswers = await inquirer.prompt(managerQuestions);
const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);


teamMembers.push(manager);

// Loop to gather information about the team members
let menuChoice = "";
while (menuChoice !== "Finish building the team") {
  const menuAnswer = await inquirer.prompt(menuQuestion);
  menuChoice = menuAnswer.menuChoice;

  // Process user choice
  if (menuChoice === "Add an engineer") {
    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    teamMembers.push(new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github));
  } else if (menuChoice === "Add an intern") {
    const internAnswers = await inquirer.prompt(internQuestions);
    teamMembers.push(new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school));
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
