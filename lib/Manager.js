const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super(name, id, email);
        this.officeNumber = "officeNumber";
    }

    getOfficeNumber() {
        const officeQuestion = [
            {
                type: 'input',
                name: 'office',
                message: `What is the manager's office number?`,
            },
        ]
        inquirer
        .prompt(officeQuestion)
        .then((data) => {
        this.officeNumber = data;
    });
    }

    getRole() {
        return "Manager"
        //overridden to return "Manager"
    }
}

module.exports = Manager;