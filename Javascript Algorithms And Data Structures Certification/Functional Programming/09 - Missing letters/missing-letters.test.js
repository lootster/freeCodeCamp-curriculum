const fearNotLetter = require("../09 - Missing letters/missing-letters");

describe("missing-letters", () => {
  it("should should return 'd'", () => {
    let result = fearNotLetter("abce");
    expect(result).toBe("d");
  });
  it("should should return 'i'", () => {
    let result = fearNotLetter("abcdefghjklmno");
    expect(result).toBe("i");
  });
  it("should should return 'u'", () => {
    let result = fearNotLetter("stvwx");
    expect(result).toBe("u");
  });
  it("should should return 'e'", () => {
    let result = fearNotLetter("bcdf");
    expect(result).toBe("e");
  });
  it("should should return 'undefined'", () => {
    let result = fearNotLetter("abcdefghijklmnopqrstuvwxyz");
    expect(result).toBe(undefined);
  });
});
