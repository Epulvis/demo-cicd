const hello = require("../src/index");
//
test("hello returns correct string", () => {
  expect(hello()).toBe("Hello, CI/CD!");
});