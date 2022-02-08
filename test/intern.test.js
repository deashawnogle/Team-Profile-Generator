const Intern = require("../lib/Intern")
test ("test all Interns properties", () => {
    const intern = new Intern("Young", 1, "test@test.com", "University of Washington")
    expect (intern.name).toEqual("Young")
    expect (intern.id).toEqual(1)
    expect (intern.email).toEqual("test@test.com")
    expect (intern.school).toEqual("University of Washington")
});

test ("test all interns method", () => {
    const intern = new Intern("Cindy", 2, "test2@test.com", "University of Washington")
    expect (intern.getName()).toEqual("Cindy")
    expect (intern.getId()).toEqual(2)
    expect (intern.getEmail()).toEqual("test2@test.com")
    expect (intern.getSchool()).toEqual("University of Washington")
    expect (intern.getRole()).toEqual("Intern")

});