const dropElements = require("./Drop-it");

describe("Drop it", () => {
  it("should return [3, 4]", () => {
    let result = dropElements([1, 2, 3, 4], function(n) {
      return n >= 3;
    });
    expect(result).toEqual([3, 4]);
  });
  it("should return [1, 0, 1]", () => {
    let result = dropElements([0, 1, 0, 1], function(n) {
      return n === 1;
    });
    expect(result).toEqual([1, 0, 1]);
  });
  it("should return [1, 2, 3]", () => {
    let result = dropElements([1, 2, 3], function(n) {
      return n > 0;
    });
    expect(result).toEqual([1, 2, 3]);
  });
  it("should return [7, 4]", () => {
    let result = dropElements([1, 2, 3, 7, 4], function(n) {
      return n > 3;
    });
    expect(result).toEqual([7, 4]);
  });
  it("should return [3, 9, 2]", () => {
    let result = dropElements([1, 2, 3, 9, 2], function(n) {
      return n > 2;
    });
    expect(result).toEqual([3, 9, 2]);
  });
});
