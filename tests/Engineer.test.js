const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it(`should return an object containing a 'github' property and a 'name', an 'id', and an 'email' 
        property inherited from class Employee when called with the 'new' keyword`, () => {
      const obj = new Engineer();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("github" in obj).toEqual(true);
    });
  })
});