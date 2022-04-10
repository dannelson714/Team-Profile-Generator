function generateHTML(employeeList) {
    let employeeString = "";
    for (const employee of employeelist) {
        if (employee.getRole() === 'Engineer') {
            employeeString = employeeString + engineerHTML(employee);
        }
        if (employee.getRole() === 'Intern') {
            employeeString = employeeString + internHTML(employee);
        }
        if (employee.getRole() === 'Manager') {
            employeeStrig = employeeString + managerHTML(employee);
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
    
      </style>
    </head>
    <body>
    
    <div class="jumbotron">
        <div class="container text-center">
            <h1>My Team</h1>      
        </div>
    </div>
      
    <div class="container text-center">    
      <div class="row">
        ${employeeString}
        </div>
      </div>
    </div><br>
    </body>
    </html>`
    return htmlString;
}



function engineerHTML(engineerObject) {
htmlString = `<div class="col-12 col-md-4 col-lg-3 text-white mb-3">
        <div class="card-header bg-primary">
            <h2>${engineerObject.name}</h2>
            <h5>Engineer</h5>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineerObject.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineerObject.email}">${engineerObject.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineerObject.github}/">${engineerObject.github}</a></li>
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>`
return htmlString;
}

function internHTML(internObject) {
    htmlString = `<div class="col-12 col-md-4 col-lg-3 text-white mb-3">
            <div class="card-header bg-primary">
                <h2>${internObject.name}</h2>
                <h5>Engineer</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${internObject.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${internObject.email}">${internObject.email}</a></li>
                    <li class="list-group-item">School: ${engineerObject.github}</li>
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>`
    return htmlString;
    }

function managerHTML(managerObject) {
    htmlString = `<div class="col-12 col-md-4 col-lg-3 text-white mb-3">
            <div class="card-header bg-primary">
                <h2>${managerObject.name}</h2>
                <h5>Engineer</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${managerObject.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${managerObject.email}">${managerObject.email}</a></li>
                    <li class="list-group-item">Office number: ${managerObject.officeNumber}</li>
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>`
    return htmlString;
    }

module.exports = generateHTML;