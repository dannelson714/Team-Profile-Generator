const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super();
        this.school = 'default';
    }

    getSchool() {
        const internQuestion = 
            {
                type: 'input',
                name: 'school',
                message: `What is the intern's school?`,
            }
        return internQuestion
       ;
    };
    
    getRole() {
        return "Intern"
        //overridden to return "Intern"
    }
}

module.exports = Intern;