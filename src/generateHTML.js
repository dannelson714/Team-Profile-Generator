function generateHTML(employeeList) {
    let employeeString = "";
    for (const employee of employeeList) {
        if (employee.getRole() === 'Engineer') {
            console.log('engineer');
            employeeString = employeeString + engineerHTML(employee);
        }
        if (employee.getRole() === 'Intern') {
            console.log('intern');
            employeeString = employeeString + internHTML(employee);
        }
        if (employee.getRole() === 'Manager') {
            console.log('manager');
            employeeString = employeeString + managerHTML(employee);
        }
    }

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

        .row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
    
      </style>
    </head>
    <body>
    
    <div class="jumbotron">
        <div class="container text-center">
            <h1>My Team</h1>      
        </div>
    </div>
      
    <div class="container text-center justify-content-center">    
        <div class="row justify-content-around">
            ${employeeString}
        </div>
    </div>
    </div><br>
    </body>
    </html>`
    return htmlString;
}



function engineerHTML(engineerObject) {
htmlString = 
       `<div class="card col-12 col-md-4 text-white mb-3 justify-content-center">
            <div class="card-header bg-primary">
                <h2>${engineerObject.name}</h2>
                <h5>Engineer</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineerObject.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineerObject.email}">${engineerObject.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineerObject.github}/">${engineerObject.github}</a></li>
            </div>
        </div>
        `
return htmlString;
}

function internHTML(internObject) {
    htmlString = 
       `<div class="card col-12 col-md-4 text-white mb-3 justify-content-center">
            <div class="card-header bg-primary">
                <h2>${internObject.name}</h2>
                <h5>Intern</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${internObject.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${internObject.email}">${internObject.email}</a></li>
                    <li class="list-group-item">School: ${internObject.school}</li>
            </div>
        </div>    
        `
    return htmlString;
    }

function managerHTML(managerObject) {
    htmlString = 
       `<div class="card col-12 col-md-4 text-white mb-3 justify-content-center">
            <div class="card-header bg-primary">
                <h2>${managerObject.name}</h2>
                <h5>Manager</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${managerObject.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${managerObject.email}">${managerObject.email}</a></li>
                    <li class="list-group-item">Office number: ${managerObject.officeNumber}</li>
            </div>
        </div>    
        `
    return htmlString;
    }

module.exports = {
    generateHTML,
    managerHTML,
    internHTML,
    engineerHTML
};
