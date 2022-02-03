
const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./test/Intern");
const Manager = require("./test/Manager");
const Engineer = require("./test/Engineer");
const Employee = require("./test/Employee");

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
    message: "Please type employee's position?",
    name: "position",
    choices: [
        "Intern",
        "Manager",
        "Engineer"
    ]
}
]

