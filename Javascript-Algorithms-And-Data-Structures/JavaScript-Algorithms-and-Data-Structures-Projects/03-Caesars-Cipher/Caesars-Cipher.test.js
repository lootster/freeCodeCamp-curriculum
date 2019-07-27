const rot13 = require("./Caesars-Cipher");

describe("Caesars Cipher", () => {
  it('should decode to "FREE CODE CAMP"', () => {
    let result = rot13("SERR PBQR PNZC");
    expect(result).toEqual("FREE CODE CAMP");
  });
  it('should decode to "FREE PIZZA!"', () => {
    let result = rot13("SERR CVMMN!");
    expect(result).toEqual("FREE PIZZA!");
  });
  it('should decode to "FREE LOVE?"', () => {
    let result = rot13("SERR YBIR?");
    expect(result).toEqual("FREE LOVE?");
  });
  it('should decode to "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
    let result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
    expect(result).toEqual("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  });
});
