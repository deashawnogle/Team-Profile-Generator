const Engineer = require("../lib/Engineer")
test ("test all Engineers properties", () => {
    const engineer = new Engineer("Chu", 1, "test@test.com", "deashawnogle")
    expect (engineer.name).toEqual("Chu")
    expect (engineer.id).toEqual(1)
    expect (engineer.email).toEqual("test@test.com")
    expect (engineer.github).toEqual("deashawnogle")
});

test ("test all Engineers method", () => {
    const engineer = new Engineer("John", 2, "test2@test.com", "testtest")
    expect (engineer.getName()).toEqual("John")
    expect (engineer.getId()).toEqual(2)
    expect (engineer.getEmail()).toEqual("test2@test.com")
    expect (engineer.getGithub()).toEqual("testtest")
    expect (engineer.getRole()).toEqual("Engineer")

});