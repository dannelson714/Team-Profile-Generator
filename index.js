//Include packages required for this project
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const template = require('./src/template');

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, (err) => err ? console.log(err) : console.log('Success!'));
}

// Create a function to initialize app
function init() {
    console.log("Please build your team");
    // const initQuestions = [
    //     {
    //         type: 'input',
    //         name: 'name',
    //         message: `What is the team manager's name?`,
    //     },
    //     {
    //         type: 'input',
    //         name: 'id',
    //         message: `What is the team manager's id?`,
    //     },
        
    //     {
    //         type: 'input',
    //         name: 'email',
    //         message: `What is the team manager's email?`,
    //     },
    //     {
    //         type: 'input',
    //         name: 'officeNumber',
    //         message: `What is the team manager's office number?`,
    //     }
    // ]

    inquirer
    .prompt(initQuestions)
    .then((data) => {
        const manager = new Manager();
        manager.getName();
        manager.getId();
        manager.getEmail();
        return manager
    })
    .then((manager) => {
        newName = manager.getName()

    })
        inquirer
        .prompt(manager)
        manager.getRole
    
    
    
    
    
    
}

// Function call to initialize app
init();