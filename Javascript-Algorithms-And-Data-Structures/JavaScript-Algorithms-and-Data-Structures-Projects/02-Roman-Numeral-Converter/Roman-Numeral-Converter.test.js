const convertToRoman = require("./Roman-Numeral-Converter");

describe("convertToRoman", () => {
  it('should return "II"', () => {
    let result = convertToRoman(2);
    expect(result).toEqual("II");
  });
  it('should return "III"', () => {
    let result = convertToRoman(3);
    expect(result).toEqual("III");
  });
  it('should return "IV"', () => {
    let result = convertToRoman(4);
    expect(result).toEqual("IV");
  });
  it('should return "V"', () => {
    let result = convertToRoman(5);
    expect(result).toEqual("V");
  });
  it('should return "IX"', () => {
    let result = convertToRoman(9);
    expect(result).toEqual("IX");
  });
  it('should return "IX"', () => {
    let result = convertToRoman(9);
    expect(result).toEqual("IX");
  });
  it('should return "XII"', () => {
    let result = convertToRoman(12);
    expect(result).toEqual("XII");
  });
  it('should return "XVI"', () => {
    let result = convertToRoman(16);
    expect(result).toEqual("XVI");
  });
  it('should return "XXIX"', () => {
    let result = convertToRoman(29);
    expect(result).toEqual("XXIX");
  });
  it('should return "XLIV"', () => {
    let result = convertToRoman(44);
    expect(result).toEqual("XLIV");
  });
  it('should return "XLV"', () => {
    let result = convertToRoman(45);
    expect(result).toEqual("XLV");
  });
  it('should return "LXVIII"', () => {
    let result = convertToRoman(68);
    expect(result).toEqual("LXVIII");
  });
  it('should return "LXXXIII"', () => {
    let result = convertToRoman(83);
    expect(result).toEqual("LXXXIII");
  });
  it('should return "XCVII"', () => {
    let result = convertToRoman(97);
    expect(result).toEqual("XCVII");
  });
  it('should return "XCIX"', () => {
    let result = convertToRoman(99);
    expect(result).toEqual("XCIX");
  });
  it('should return "CD"', () => {
    let result = convertToRoman(400);
    expect(result).toEqual("CD");
  });
  it('should return "D"', () => {
    let result = convertToRoman(500);
    expect(result).toEqual("D");
  });
  it('should return "DI"', () => {
    let result = convertToRoman(501);
    expect(result).toEqual("DI");
  });
  it('should return "DCCXCVIII"', () => {
    let result = convertToRoman(798);
    expect(result).toEqual("DCCXCVIII");
  });
  it('should return "DCCCXCI"', () => {
    let result = convertToRoman(891);
    expect(result).toEqual("DCCCXCI");
  });
  it('should return "M"', () => {
    let result = convertToRoman(1000);
    expect(result).toEqual("M");
  });
  it('should return "MIV"', () => {
    let result = convertToRoman(1004);
    expect(result).toEqual("MIV");
  });
  it('should return "MVI"', () => {
    let result = convertToRoman(1006);
    expect(result).toEqual("MVI");
  });
  it('should return "MXXIII"', () => {
    let result = convertToRoman(1023);
    expect(result).toEqual("MXXIII");
  });
  it('should return "MMXIV"', () => {
    let result = convertToRoman(2014);
    expect(result).toEqual("MMXIV");
  });
  it('should return "MMMCMXCIX"', () => {
    let result = convertToRoman(3999);
    expect(result).toEqual("MMMCMXCIX");
  });
});
