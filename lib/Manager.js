const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber = "officeNumber";
    }

    getOfficeNumber() {
        const officeQuestion = 
            {
                type: 'input',
                name: 'office',
                message: `What is the manager's office number?`,
            }
        
        return officeQuestion
    
    }

    getRole() {
        return "Manager"
        //overridden to return "Manager"
    }
}

module.exports = Manager;