const palindrome = require("./Palindrome-Checker");

describe("palindrome", () => {
  it("should return a boolean.", () => {
    let result = palindrome("eye");
    expect(typeof result).toEqual("boolean");
  });
  it("should return a true.", () => {
    let result = palindrome("eye");
    expect(result).toEqual(true);
  });
  it("should return a true.", () => {
    let result = palindrome("_eye");
    expect(result).toEqual(true);
  });
  it("should return a true.", () => {
    let result = palindrome("race car");
    expect(result).toEqual(true);
  });
  it("should return a false.", () => {
    let result = palindrome("not a palindrome");
    expect(result).toEqual(false);
  });
  it("should return a true.", () => {
    let result = palindrome("A man, a plan, a canal. Panama");
    expect(result).toEqual(true);
  });
  it("should return a true.", () => {
    let result = palindrome("never odd or even");
    expect(result).toEqual(true);
  });
  it("should return a false.", () => {
    let result = palindrome("nope");
    expect(result).toEqual(false);
  });
  it("should return a false.", () => {
    let result = palindrome("almostomla");
    expect(result).toEqual(false);
  });
  it("should return a true.", () => {
    let result = palindrome("My age is 0, 0 si ega ym.");
    expect(result).toEqual(true);
  });
  it("should return a false.", () => {
    let result = palindrome("1 eye for of 1 eye.");
    expect(result).toEqual(false);
  });
  it("should return a true.", () => {
    let result = palindrome("0_0 (: /- :) 0-0");
    expect(result).toEqual(true);
  });
  it("should return a true.", () => {
    let result = palindrome("0_0 (: /- :) 0-0");
    expect(result).toEqual(true);
  });
  it("should return a false.", () => {
    let result = palindrome("five|_/|four");
    expect(result).toEqual(false);
  });
});
