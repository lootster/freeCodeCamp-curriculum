// Define an object according to denomination's type and value
const DENOMINATIONS = [
  { type: "ONE_HUNDRED", value: 100.0 },
  { type: "TWENTY", value: 20.0 },
  { type: "TEN", value: 10.0 },
  { type: "FIVE", value: 5.0 },
  { type: "ONE", value: 1.0 },
  { type: "QUARTER", value: 0.25 },
  { type: "DIME", value: 0.1 },
  { type: "NICKEL", value: 0.05 },
  { type: "PENNY", value: 0.01 }
];

// Define the various status message
const MESSAGE = {
  STATUS_OPEN_MSG: "Cash register is open",
  STATUS_INSUFFICIENT_MSG: "Cash register has insufficient funds",
  STATUS_CLOSED_MSG: "Cash register is closed",
  STATUS_NO_EXACT_CHANGE_MSG: "There is no exact change in register"
};

module.exports = { DENOMINATIONS, MESSAGE };
