// creates the team
const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <div class="card mb-3 employee-card shadow">
        <div class="card-header" style="background-color: orange; color: white;">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2" style="color: rgb(117, 114, 114);"></i>Manager</h3>
        </div>
        <div class="card-body" style="background-color: #ffebcc; color: rgb(95, 92, 92);">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card mb-3 employee-card shadow">
        <div class="card-header" style="background-color: green; color: white;">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2" style="color: rgb(77, 74, 74);"></i>Engineer</h3>
        </div>
        <div class="card-body" style="background-color: #b3ffb3; color: rgb(95, 92, 92);">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="card mb-3 employee-card shadow">
        <div class="card-header" style="background-color: teal; color: white;">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2" style="color: rgb(57, 55, 55);;"></i>Intern</h3>
        </div>
        <div class="card-body" style="background-color: #99e6e6; color: rgb(95, 92, 92);">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const html = [];

    html.push(
        team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)).join("")
    );
    html.push(
        team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join("")
    );
    html.push(
        team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join("")
    );

    return `
        <div class="card-columns">
            ${html.join("")}
        </div>
    `;
};

// exports function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="page-template.js"></script>
    <script src="https://kit.fontawesome.com/c502137733.js"></script>

    </head>

<div class="container-fluid my-team-background p-4">
    <div class="row">
    <div class="col-12 jumbotron mb-3 team-heading" style="background-color: #b3bcf5; color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
            <h1 class="text-center display-4 font-weight-bold">My Team</h1>
        </div>
    </div>
    </div>
    <div class="container-fluid p-4">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>


    <!-- Bootstrap JS and Popper.js -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>

    `;
};