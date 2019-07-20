const addTogether = require("./Arguments-Optional");

describe("Arguments Optional", () => {
  it("should return 5", () => {
    let result = addTogether(2, 3);
    expect(result).toEqual(5);
  });
  it("should return 5", () => {
    let result = addTogether(2)(3);
    expect(result).toEqual(5);
  });
  it("should return undefined", () => {
    let result = addTogether("http://bit.ly/IqT6zt");
    expect(result).toEqual(undefined);
  });
  it("should return undefined", () => {
    let result = addTogether(2, "3");
    expect(result).toEqual(undefined);
  });
  it("should return undefined", () => {
    let result = addTogether(2)([3]);
    expect(result).toEqual(undefined);
  });
});
