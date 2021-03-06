const checkCashRegister = require("./cashRegister");
const { MESSAGE } = require("./constants");

describe("checkCashRegister", () => {
  it("should return an object with status open with the correct change array", () => {
    let cashInDrawerArray = [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE_HUNDRED", 100]
    ];

    let result = checkCashRegister(19.5, 20, cashInDrawerArray);

    let resultObject = {
      status: MESSAGE.STATUS_OPEN_MSG,
      change: [["QUARTER", 0.5]]
    };

    expect(typeof result).toEqual("object");
    expect(result).toEqual(resultObject);
  });
  it("should return an object with status insufficient funds and empty change array", () => {
    let cashInDrawerArray = [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE_HUNDRED", 0]
    ];

    let result = checkCashRegister(19.5, 20, cashInDrawerArray);

    let resultObject = {
      status: MESSAGE.STATUS_INSUFFICIENT_MSG,
      change: []
    };

    expect(result).toEqual(resultObject);
  });
  it('should return {status: "There is no exact change in register", change: []}', () => {
    let cashInDrawerArray = [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 1],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE_HUNDRED", 0]
    ];

    let result = checkCashRegister(19.5, 20, cashInDrawerArray);

    let resultObject = {
      status: MESSAGE.STATUS_NO_EXACT_CHANGE_MSG,
      change: []
    };

    expect(result).toEqual(resultObject);
  });
  it('should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}', () => {
    let cashInDrawerArray = [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE_HUNDRED", 0]
    ];
    let result = checkCashRegister(19.5, 20, cashInDrawerArray);

    let resultObject = {
      status: MESSAGE.STATUS_CLOSED_MSG,
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE_HUNDRED", 0]
      ]
    };

    expect(result).toEqual(resultObject);
  });
});
