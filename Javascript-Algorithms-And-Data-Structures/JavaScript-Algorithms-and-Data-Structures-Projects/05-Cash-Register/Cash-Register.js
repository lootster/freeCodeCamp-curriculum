// Define an object according to denomination's type and value
const DENOMINATIONS = [
  { type: "ONE HUNDRED", value: 100.0 },
  { type: "TWENTY", value: 20.0 },
  { type: "TEN", value: 10.0 },
  { type: "FIVE", value: 5.0 },
  { type: "ONE", value: 1.0 },
  { type: "QUARTER", value: 0.25 },
  { type: "DIME", value: 0.1 },
  { type: "NICKEL", value: 0.05 },
  { type: "PENNY", value: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  let result = { status: null, change: [] };
  let totalChange = cash - price;
  let totalCid = sumUpCid(cid);

  // Handle cases where cash-in-drawer is exact
  if (isCashInDrawerEqualToChangeDue(totalCid, totalChange)) {
    return statusClosed(result, cid);
  }

  // Handle cases where cash-in-drawer is insufficient
  if (isCashInDrawerLessThanChangeDue(totalCid, totalChange)) {
    return statusInsufficient(result);
  }

  // Handle cases where cash-in-drawer is sufficient

  // Convert cid array into an object
  let cidObject = convertCidArrayIntoObject(cid);

  totalChange = getChangeInDifferentDenomination(totalChange, cidObject, result);

  // Handle cases where cid is sufficient yet with no exact change due (excess)
  if (isThereRemaining(totalChange)) {
    return statusInsufficient(result);
  }

  // Return back the change due
  return statusOpen(result);
}

module.exports = checkCashRegister;


const STATUS_OPEN_MSG = "OPEN";
const STATUS_INSUFFICIENT_MSG = "INSUFFICIENT_FUNDS";
const STATUS_CLOSED_MSG = "CLOSED";

function statusOpen(result) {
  result.status = STATUS_OPEN_MSG;
  return result;
}

function getChangeInDifferentDenomination(change, cidObject, result) {
  DENOMINATIONS.forEach(denomination => {
    let amount = 0;
    while (change >= denomination.value && cidObject[denomination.type] > 0) {
      amount += denomination.value;
      change -= denomination.value;
      cidObject[denomination.type] -= denomination.value;
      change = Math.round(change * 100) / 100;
    }
    // Include only denomination types, that was used as change, to the result 
    if (isDenominationTypeUsedForChange(amount)) {
      let arr = result.change;
      arr.push([denomination.type, amount]);
    }
  });
  return change;
}

function isDenominationTypeUsedForChange(amount) {
  return amount > 0;
}

function isThereRemaining(change) {
  return change > 0;
}

function isCashInDrawerLessThanChangeDue(totalCash, change) {
  return totalCash < change;
}

function isCashInDrawerEqualToChangeDue(totalCash, change) {
  return totalCash == change;
}

function statusInsufficient(result) {
  result.status = STATUS_INSUFFICIENT_MSG;
  result.change = [];
  return result;
}

function statusClosed(result, cid) {
  result.status = STATUS_CLOSED_MSG;
  result.change = cid;
  return result;
}

function sumUpCid(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i][1]);
  }
  return total.toFixed(2);
}

function convertCidArrayIntoObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}
