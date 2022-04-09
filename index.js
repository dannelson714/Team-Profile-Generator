//Include packages required for this project
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for installing your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage information for your user',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter guidelines for users to contribute to this project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any instructions for testing',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any credits you would like to include for this README',
    },
    {
        type: 'list',
        message: 'Please choose a license for your project from the following options',
        name: 'license',
        choices: ['MIT','APACHE 2.0','GNU GPL v3','BSD 3','None']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your e-mail address',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username'
    }
]

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, (err) => err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
        var readMe = generateMarkdown(data);
        writeToFile(readMe);
     });
}

// Function call to initialize app
init();