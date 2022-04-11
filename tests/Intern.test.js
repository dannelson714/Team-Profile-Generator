const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it(`should return an object containing a 'school' property and a 'name', an 'id', and an 'email' 
        property inherited from class Employee when called with the 'new' keyword`, () => {
      const obj = new Intern();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });
  })
});