const sumPrimes = require("./Sum-All-Primes");

describe("Sum All Primes", () => {
  it("should return a number.", () => {
    let result = sumPrimes(10);
    expect(typeof result).toBe("number");
    expect(result).toBe(17);
  });
  it("should return 73156.", () => {
    let result = sumPrimes(977);
    expect(result).toBe(73156);
  });
});
