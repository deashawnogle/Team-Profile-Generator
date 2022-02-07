const Employee = require("../lib/Employee")
test ("test all employees properties", () => {
    const employee = new Employee("Tim", 1, "test@test.com")
    expect (employee.name).toEqual("Tim")
    expect (employee.id).toEqual(1)
    expect (employee.email).toEqual("test@test.com")
});

test ("test all employees method", () => {
    const employee = new Employee("Dae", 2, "test1@test.com")
    expect (employee.getName()).toEqual("Dae")
    expect (employee.getId()).toEqual(2)
    expect (employee.getEmail()).toEqual("test1@test.com")
    expect (employee.getRole()).toEqual("Employee")
});