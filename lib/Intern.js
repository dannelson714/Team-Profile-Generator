const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super(name, id, email);
        this.school = 'default';
    }

    getSchool() {
        const internQuestion = [
            {
                type: 'input',
                name: 'school',
                message: `What is the intern's school?`,
            },
        ]
        inquirer
        .prompt(internQuestion)
        .then((data) => {
        this.school = data;
    });
    }

    getRole() {
        return "Intern"
        //overridden to return "Intern"
    }
}

module.exports = Intern;