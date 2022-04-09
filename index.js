//Include packages required for this project
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const template = require('./src/generateHTML');

//Array that will be populated with Employee objects
const employeeList = []

//Called from within getTeamMember function. Creates either engineer, intern or returns, breaking the cycle.
function getNewEmployee (choice) {
    
    if (choice === 'Engineer') {
        choice = 'engineer'
        let engineer = new Engineer();
        engineer.getName(choice);
        engineer.getId(choice);
        engineer.getEmail(choice);
        engineer.getGithub(choice);
        employeeList.push(engineer)
        getTeamMember();
    }
    else if (choice === 'Intern') {
        choice = 'intern'
        let intern = new Intern();
        intern.getName(choice);
        intern.getId(choice);
        intern.getEmail(choice);
        intern.getSchool(choice);
        employeeList.push(intern)
        getTeamMember();
    }
    else if (choice === "I don't want to add more team members") {
        return
    }
}
 
//Will give the user prompts to add more team members or stop
function getTeamMember() {
    const roleQuestion = [
        {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'role',
        choices: ['Engineer','Intern',"I don't want to add more team members"]
        }
    ]
    inquirer
    .prompt(roleQuestion)
    .then((data) => {
        getNewEmployee(data)
    })
}

//Function to write the resultant html and store it in the dist folder
function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, (err) => err ? console.log(err) : console.log('Success!'));
}

// Create a function to initialize app
function init() {
    console.log("Please build your team");
    let manager = new Manager();
    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOfficeNumber();
    employeeList.push(manager);
    getTeamMember();
    htmlString = generateHTML(employeeList);
    writeToFile(htmlString);
}

init();