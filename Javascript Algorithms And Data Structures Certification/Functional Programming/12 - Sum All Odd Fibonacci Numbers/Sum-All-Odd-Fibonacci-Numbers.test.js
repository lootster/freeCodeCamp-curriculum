const sumFibs = require("./Sum-All-Odd-Fibonacci-Numbers");

describe("12 - Sum All Odd Fibonacci Numbers", () => {
  it("should return 1", () => {
    let result = sumFibs(1);
    expect(result).toBe(2);
  });
  it("sumFibs(1000) should return 1785.", () => {
    let result = sumFibs(1000);
    expect(result).toBe(1785);
  });
  it("sumFibs(4000000) should return 4613732.", () => {
    let result = sumFibs(4000000);
    expect(result).toBe(4613732);
  });
  it("sumFibs(4) should return 5.", () => {
    let result = sumFibs(4);
    expect(result).toBe(5);
  });
  it("sumFibs(75024) should return 60696.", () => {
    let result = sumFibs(75024);
    expect(result).toBe(60696);
  });
  it("sumFibs(75025) should return 135721.", () => {
    let result = sumFibs(75025);
    expect(result).toBe(135721);
  });
});
