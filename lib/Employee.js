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

function getNewEmployee (choice) {
    
    if (choice === 'Engineer') {
        choice = 'engineer'
        let engineer = new Engineer();
        engineer.getName(choice);
        engineer.getId(choice);
        engineer.getEmail(choice);
        engineer.getGithub(choice);
        engineer.getRole();
        getTeamMember();
    }
    else if (choice === 'Intern') {
        choice = 'intern'
        let intern = new Intern();
        intern.getName(choice);
        intern.getId(choice);
        intern.getEmail(choice);
        intern.getSchool(choice);
        intern.getRole();
        getTeamMember();
    }
    else if (choice === "I don't want to add more team members") {
        return
    }
    // else {
    //     let manager = new Manager();
    //     manager.getName();
    //     manager.getId();
    //     manager.getEmail();
    //     manager.getOfficeNumber();
    //     manager.getRole();
    // }
}

function getTeamMember() {
    const roleQuestion = [
        {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'role',
        choices: ['Engineer','Intern',"I don't want to add more team members"]
        }
    ]
    inquirer
    .prompt(roleQuestion)
    .then((data) => {
        getNewEmployee(data)
    })
}


function generateHTML(data) {
    htmlString = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>My Team</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <style>
        /* Remove the navbar's default margin-bottom and rounded borders */ 
        .jumbotron {
          margin-bottom: 0;
          border-radius: 0;
          background-color: tomato;
          color: white;
        }
    
        /* Add a gray background color and some padding to the footer */
        footer {
          background-color: #f2f2f2;
          padding: 25px;
        }
    
      </style>
    </head>
    <body>
    
    <div class="jumbotron">
        <div class="container text-center">
            <h1>My Team</h1>      
        </div>
    </div>
      
    <div class="container text-center">    
      <h3>What We Do</h3><br>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3 text-white mb-3">
            <div class="card-header bg-primary">Header</div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>>
          <p>Current Project</p>
        </div>
      </div>
    </div><br>
    </body>
    </html>`
    return htmlString;


    ///Create an array of all the created objects, create a function that will spit out a string html for each based on a new card, then insert ${} that into HTML file.