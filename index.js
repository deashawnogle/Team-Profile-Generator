//Global Variable
const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const render = require("./lib/htmlRenderer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = "./output/test.html"
const employee = [];

//General Question for Employee
const questions = [{
    type: "input",
    message: "Please type employee's name?",
    name: "name"
},
{
    type: "input",
    message: "Please type employee's id number?",
    name: "id"
},
{
    type: "input",
    message: "Please type employee's email?",
    name: "email"
},
{
    type: "list",
    message: "Please type employee's role?",
    name: "role",
    choices: [
        "Intern",
        "Manager",
        "Engineer"
    ]
}
];

//function for the questions Manager / Engineer / Intern
function employeeQuestion() {
    inquirer.prompt(questions)
    .then(response => {
        let employeeRole = response.role;
            //console.log(employeeRole)
        if (employeeRole === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your Office Number?",
                    name: "officeNumber"
                },
                {
                    type: "list",
                    message: "Add more Team Members?",
                    name: "moreEmployee",
                    choices: [
                        "Yes",
                        "No"
                    ]
                }
            ]).then(function(employeeInfo) {
                let newMember = new Manager (response.name, response.id, response.email, employeeInfo.officeNumber);
                employee.push(newMember);
                if (employeeInfo.moreEmployee === "Yes") {
                    employeeQuestion();
                }
                else {
                    createHTML();
                    console.log("HTML Created!!!");
                }
            })
        }
        else if (employeeRole === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is Github ID?",
                    name: "github",
                },
                {
                    type: "list",
                    message: "Add more Team Members?",
                    name: "moreEmployee",
                    choices: [
                        "Yes",
                        "No"
                    ]
                }
            ]).then(function(employeeInfo) {
                let newMember = new Engineer(response.name, response.id, response.email, employeeInfo.github);
                employee.push(newMember);
                if (employeeInfo.moreEmployee === "Yes") {
                    employeeQuestion();
                }
                else {
                    createHTML();
                    console.log("HTML Created!!!");
                }
            })
        }
        else if (employeeRole === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Which School attended?",
                    name : "school"
                },
                {
                    type: "list",
                    message: "Add more Team Members?",
                    name: "moreEmployee",
                    choices: [
                        "Yes",
                        "No"
                    ]
                }
            ]).then(function(employeeInfo) {
                let newMember = new Intern(response.name, response.id, response.email, employeeInfo.school);
                employee.push(newMember);
                if (employeeInfo.moreEmployee === "Yes") {
                    employeeQuestion();
                }
                else {
                    createHTML();
                    console.log("HTML Created!!!");

                }
            })
        }
    })
}

employeeQuestion();

//Function for create HTML
function createHTML() {
    
    fs.writeFileSync(outputPath, render(employee))
}


