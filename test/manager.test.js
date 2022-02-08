const Manager = require("../lib/Manager")
test ("test all Managers properties", () => {
    const manager = new Manager("Tom", 1, "test@test.com", 1)
    expect (manager.name).toEqual("Tom")
    expect (manager.id).toEqual(1)
    expect (manager.email).toEqual("test@test.com")
    expect (manager.officeNumber).toEqual(1)
});

test ("test all Managers method", () => {
    const manager = new Manager("Tae", 2, "test2@test.com", 2)
    expect (manager.getName()).toEqual("Tae")
    expect (manager.getId()).toEqual(2)
    expect (manager.getEmail()).toEqual("test2@test.com")
    expect (manager.getOfficeNumber()).toEqual(2)
    expect (manager.getRole()).toEqual("Manager")

});