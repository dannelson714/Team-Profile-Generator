const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        //overridden to return "Manager"
    }
}

module.exports = Manager;