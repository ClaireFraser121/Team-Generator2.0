const { createManager, createEngineer, createIntern, getMenuChoice } = require("./src/promptUtils.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
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

   // Loop to gather information about the team members
   let menuChoice = "";
   while (menuChoice !== "Finish building the team") {
       menuChoice = await getMenuChoice();

       // Process user choice
       if (menuChoice === "Add a manager") {
           teamMembers.push(await createManager());
       } else if (menuChoice === "Add an engineer") {
           teamMembers.push(await createEngineer());
       } else if (menuChoice === "Add an intern") {
           teamMembers.push(await createIntern());
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
