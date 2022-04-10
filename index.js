//Include packages required for this project
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const template = require('./src/generateHTML');
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
                engineer.officeNumber = data.office;
                employeeList.push(engineer);
                console.log(employeeList);
                getTeamMember();
            })
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
     
       
            
    
    
    // const p = new Promise((resolve, reject) => {
    // resolve(manager)})
    
    // p
    //     .then(() => {
    //         manager.getName('manager')
    //         return Promise.resolve(manager)})
    //     .then(()=> {
    //         manager.getId('manager')})
    //     .catch((err) => console.error(err));
        // .then((manager) => {
        //     manager.getName('manager')
        //     return manager
        // })
        // .then((manager) => {
        //     manager.getId('manager')
        //     return manager
        // })
    // manager.getName('manager')
    //     .then( => manager.getId('manager'))
    // manager.getRole()
    // manager.getOfficeNumber();
    // employeeList.push(manager);
    // getTeamMember();
    // htmlString = generateHTML(employeeList);
    // writeToFile(htmlString);
}

init();