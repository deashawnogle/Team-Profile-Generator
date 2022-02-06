// The first class is an `Manager` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `officeNumber`


const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getGithub() {
        return this.officeNumber
    };
    getRole() {
        return "Manager"
    };
}


module.exports = Manager