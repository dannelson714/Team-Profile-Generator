const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

class Employee {
    constructor() {
        this.name = "default";
        this.id = 'default';
        this.email = 'default';
    }

    getName() {
        const nameQuestion = [
            {
                type: 'input',
                name: 'name',
                message: `What is the ${Employee.role}'s name?`,
            },
        ]
        inquirer
        .prompt(nameQuestion)
        .then((data) => {
        this.name = data
     });

    }

    getId() {
        const idQuestion = [
            {
                type: 'input',
                name: 'id',
                message: `What is the ${Employee.role}'s id?`,
            },
        ]
        inquirer
        .prompt(idQuestion)
        .then((data) => {
        this.id = data;
     });
    }

    getEmail() {
        const emailQuestion = [
            {
                type: 'input',
                name: 'name',
                message: `What is the ${Employee.role}'s email?`,
            },
        ]
        inquirer
        .prompt(emailQuestion)
        .then((data) => {
        this.email = data;
     });
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;

function getNewEmployee (choice) {
    
    if (choice === 'Engineer') {
        let engineer = new Engineer();
        engineer.getName();
        engineer.getId();
        engineer.getEmail();
        engineer.getGithub();
        engineer.getRole();
        getTeamMember();
    }
    else if (choice === 'Intern') {
        let intern = new Intern();
        intern.getName();
        intern.getId();
        intern.getEmail();
        intern.getSchool();
        intern.getRole();
        getTeamMember();
    }
    else if (choice === "I don't want to add more team members") {
        return
    }
    // else {
    //     let manager = new Manager();
    //     manager.getName();
    //     manager.getId();
    //     manager.getEmail();
    //     manager.getOfficeNumber();
    //     manager.getRole();
    // }
}

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
