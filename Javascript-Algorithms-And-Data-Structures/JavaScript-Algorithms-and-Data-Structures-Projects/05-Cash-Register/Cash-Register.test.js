const checkCashRegister = require("./Cash-Register");

describe("checkCashRegister", () => {
  it("should return an object", () => {
    let result = checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]);
    expect(typeof result).toEqual("object");
  });
  it('should return {status: "OPEN", change: [["QUARTER", 0.5]]}', () => {
    let result = checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]);
    expect(result).toEqual({ status: "OPEN", change: [["QUARTER", 0.5]] });
  });
  it('should return {status: "INSUFFICIENT_FUNDS", change: []}', () => {
    let result = checkCashRegister(19.5, 20, [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]);
    expect(result).toEqual({ status: "INSUFFICIENT_FUNDS", change: [] });
  });
  it('should return {status: "INSUFFICIENT_FUNDS", change: []}', () => {
    let result = checkCashRegister(19.5, 20, [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 1],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]);
    expect(result).toEqual({ status: "INSUFFICIENT_FUNDS", change: [] });
  });
  it('should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}', () => {
    let result = checkCashRegister(19.5, 20, [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]);
    expect(result).toEqual({
      status: "CLOSED",
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]
    });
  });
});
