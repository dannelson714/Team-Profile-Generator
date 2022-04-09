const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super(name, id, email);
        this.github = 'default';
    }

    getGithub() {
        const engineerQuestion = [
            {
                type: 'input',
                name: 'github',
                message: `What is the engineer's github handle?`,
            },
        ]
        inquirer
        .prompt(engineerQuestion)
        .then((data) => {
        this.github = data;
    });
    }
    getRole() {
        return 'Engineer'
        //Something something HTML
    }
}

module.exports = Engineer;