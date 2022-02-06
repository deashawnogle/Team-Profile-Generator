
const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./Develop/lib/Intern");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");

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
]



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
