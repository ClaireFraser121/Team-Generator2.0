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
}

// Call the asynchronous function to start the application
startApp();
