const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super();
        this.github = 'default';
    }

    getGithub() {
        const engineerQuestion = 
            {
                type: 'input',
                name: 'github',
                message: `What is the engineer's github handle?`,
            }
        return engineerQuestion;
    }

    getRole() {
        return 'Engineer'
        //Something something HTML
    }

}
module.exports = Engineer;