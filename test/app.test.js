const assert = require("chai").assert;
const sayHello = require("../app").sayHello;
const addNumbers = require("../app").addNumbers;
describe("app", () => {
  it("app should return hello", () => {
    assert.equal(sayHello(), "hello");
  });
  it("Return type of sayHello should be string", () => {
    assert.typeOf(sayHello(), "string");
  });
  it("result should be greater than 5", () => {
    assert.isAbove(addNumbers(5, 5), 5);
  });
  it("result should be a number", () => {
    assert.typeOf(addNumbers(5, 5), "number");
  });
});
