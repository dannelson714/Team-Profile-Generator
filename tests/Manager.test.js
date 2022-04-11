const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it(`should return an object containing a 'officeNumber' property and a 'name', an 'id', and an 'email' 
        property inherited from class Employee when called with the 'new' keyword`, () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("officeNumber" in obj).toEqual(true);
    });
  })
});