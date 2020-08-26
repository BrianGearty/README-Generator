const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');



// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your program?",
    name: "Title"
  },
  {
    type: "input",
    message: "Give a Description of your application.",
    name: "Description"
  },
  {
    type: "input",
    message: "Steps to install your application?",
    name: "Install"
  },
  {
    type:'input',
    message: "Input instructions to use your application.",
    name: 'Usage'
  },
  {
    type: "input",
    message: "Input license for your application.",
    name: "License",
    choices: ["Open Source", "Public Domain", "MIT License", "Apache License", "GPL License"]
  },
  {
    type: "input",
    message: "Are there any contributors on your application?",
    name: "Contributors"
  },
  {
    type:'input',
    message: "Contact info for issues and questions.",
    name: 'Contact'
  },
  {
    type: "input",
    message: "Your Github username.",
    name: "Username"
  }
]




// function to initialize program
function init() {
  inquirer.prompt(questions).then(function(answers){

      const response =  generateMarkdown(answers);
      console.log(response);
      fs.writeFile("ReadMe.md", response, (err) => {
        if (err) {
            throw err;
        
          };
      });

    
  });
}
// function call to initialize program
init();