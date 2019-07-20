const steamrollArray = require("./Steamroller");

describe("steamrollArray", () => {
  it('should return ["a", "b"]', () => {
    let result = steamrollArray([[["a"]], [["b"]]]);
    expect(result).toEqual(["a", "b"]);
  });
  it("should return [1, 2, 3, 4]", () => {
    let result = steamrollArray([1, [2], [3, [[4]]]]);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it("should return [1, 3, 4]", () => {
    let result = steamrollArray([1, [], [3, [[4]]]]);
    expect(result).toEqual([1, 3, 4]);
  });
  it("should return [1, {}, 3, 4]", () => {
    let result = steamrollArray([1, {}, [3, [[4]]]]);
    expect(result).toEqual([1, {}, 3, 4]);
  });
});
