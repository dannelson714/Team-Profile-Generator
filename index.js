//Include packages required for this project
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');
const { resolve } = require('path');

//Array that will be populated with Employee objects
const employeeList = []

//Called from within getTeamMember function. Creates either engineer, intern or returns, breaking the cycle.
function getNewEmployee(choice) {
    if (choice === 'Engineer') {
        choice = 'engineer'
        const engineer = new Engineer();
        questionArray = [];
        questionArray.push(engineer.getName(choice), engineer.getId(choice), engineer.getEmail(choice), engineer.getGithub())
        inquirer
            .prompt(questionArray)
            .then((data) => {
                engineer.name = data.name_input;
                engineer.id = data.id;
                engineer.email = data.email;
                engineer.github = data.github;
                employeeList.push(engineer);
                getTeamMember();
            })
    }
    else if (choice === 'Intern') {
        choice = 'intern'
        const intern = new Intern();
        questionArray = [];
        questionArray.push(intern.getName(choice), intern.getId(choice), intern.getEmail(choice), intern.getSchool())
        inquirer
            .prompt(questionArray)
            .then((data) => {
                intern.name = data.name_input;
                intern.id = data.id;
                intern.email = data.email;
                intern.school = data.school;
                employeeList.push(intern);
                getTeamMember();
            })
    }
    else if (choice === "I don't want to add more team members") {
        const htmlString = generateHTML.generateHTML(employeeList);
        writeToFile(htmlString);
        console.log(employeeList);
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
        getNewEmployee(data.role)
    })
}

//Function to write the resultant html and store it in the dist folder
function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, (err) => err ? console.log(err) : console.log('Success!'));
}

// Create a function to initialize app
function init() {
    console.log("Please build your team");
    const manager = new Manager();
    questionArray = [];
    questionArray.push(manager.getName('manager'), manager.getId('manager'), manager.getEmail('manager'), manager.getOfficeNumber())
    inquirer
        .prompt(questionArray)
        .then((data) => {
            manager.name = data.name_input;
            manager.id = data.id;
            manager.email = data.email;
            manager.officeNumber = data.office;
            employeeList.push(manager);
            console.log(employeeList);
            getTeamMember();
        })
}

init();