
const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const Intern = require("./Develop/lib/Intern");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const render = require("./Develop/lib/htmlRenderer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "test.html");
const employee = [];

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


function employeeQuestion() {
    inquirer.prompt(questions)
    .then(response => {
        let employeeRole = response.role;

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
                if (employee.moreEmployee === "Yes") {
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
                    employeeQuestion ();
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

function createHTML() {
    fs.writeFileSync(outputPath, render(employee), "utf-8")
}



// // Create HTML file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//       err ? console.error(`We had an error: ${err}`) : console.log("HTML file created");
//     });
//   } 





// function writeToFile(fileName, data) {
//     fs.writeFile(`${fileName}`, data, (err) =>
//         err ? console.error('Error! : ' + err) : console.log('HTML generated'))
// }


// function init() {
//     inquirer.prompt(questions).then((data) => writeToFile('main.html', (data)))
// }

// init();
