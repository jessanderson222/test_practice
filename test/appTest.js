const assert = require("chai").assert;
// const sayHello = require("../app").sayHello;
// const addNumbers = require("../app").addNumbers;
const app = require("../app");

//Results
sayHelloResult = app.sayHello();
addNumberResult = app.addNumbers(5, 5);
nameResult = app.name("jane", "doe");

describe("App", function() {
  describe("sayHello", function() {
    it("sayHello should return hello", function() {
      // let result = app.sayHello();
      assert.equal(sayHelloResult, "hello");
    });

    it("sayHello should return type string", function() {
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, "string");
    });
  });

  describe("addNumbers", function() {
    it("addNumbers should be above 5", function() {
      // let result = app.addNumbers(5, 5);
      assert.isAbove(addNumberResult, 5);
    });

    it("addNumbers should return type number", function() {
      // let result = app.addNumbers(5, 5);
      assert.typeOf(addNumberResult, "number");
    });
  });

  describe("name", function() {
    // let result = app.name()
    it("name should return the first and last name with space in between", function() {
      assert.equal(nameResult, "jane doe");
    });
  });
});
