const smallestCommons = require("../14 - Smallest Common Multiple/Smallest-Common-Multiple");

describe("Smallest-Common-Multiple", () => {
  it("should should return a number.", () => {
    let result = smallestCommons([1, 5]);
    expect(typeof result).toBe("number");
  });
  it("should should return 60.", () => {
    let result1 = smallestCommons([1, 5]);
    let result2 = smallestCommons([5, 1]);
    expect(result1).toBe(60);
    expect(result2).toBe(60);
  });
  it("should should return a number.", () => {
    let result = smallestCommons([2, 10]);
    expect(result).toBe(2520);
  });
  it("should should return a 360360.", () => {
    let result = smallestCommons([1, 13]);
    expect(result).toBe(360360);
  });
  it("should should return a 6056820.", () => {
    let result = smallestCommons([23,18]);
    expect(result).toBe(6056820);
  });
});