const inquirer = require("inquirer");


class Employee {
    constructor() {
        this.name = "default";
        this.id = 'default';
        this.email = 'default';
    }

    getName(choice) {
        const nameQuestion = 
            {
                type: 'input',
                name: 'name_input',
                message: `What is the ${choice}'s name?`,
            }
        
        return nameQuestion
        // inquirer
        //     .prompt(nameQuestion)
        //     .then((data) => {
        //         this.name = data.name_input;
        //     })
        //     return Promise.resolve(this)
    };
    

    getId(choice) {
            const idQuestion = 
                {
                    type: 'input',
                    name: 'id',
                    message: `What is the ${choice}'s id?`,
                }
            
            return idQuestion
            // inquirer
            //     .prompt(idQuestion)
            //     .then((data) => {
            //         this.id = data.id;
            //         this.getEmail(choice)
            //     })
            //     return Promise.resolve(this)

                
    }

    getEmail(choice) {
        const emailQuestion = 
            {
                type: 'input',
                name: 'email',
                message: `What is the ${choice}'s email?`,
            }
        return emailQuestion
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;

