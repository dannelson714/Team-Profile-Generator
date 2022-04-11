const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it(`should return an object containing a 'name', an 'id', and an 'email' 
        property when called with the 'new' keyword`, () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });
  })
});