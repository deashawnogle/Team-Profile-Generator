// The first class is an `Intern` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `school`


const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getGithub() {
        return this.school;
    };
    getRole() {
        return "Intern"
    };
}


module.exports = Intern;