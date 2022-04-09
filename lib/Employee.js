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

    getName(choice) {
        const nameQuestion = [
            {
                type: 'input',
                name: 'name',
                message: `What is the ${choice}'s name?`,
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
                message: `What is the ${choice}'s id?`,
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
                message: `What is the ${choice}'s email?`,
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

