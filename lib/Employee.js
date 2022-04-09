const questions = [
    {
        type: 'input',
        name: 'name',
        message: `What is the ${Employee.role}'s name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the ${Employee.role}'s id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the ${Employee.role}'s email?`,
    },
]


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
        this.name = data;
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
        return new Employee(this.name, this.id, this.email)
    }

}

module.exports = Employee;