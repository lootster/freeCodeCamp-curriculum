// Define an object of denomination types and it's value
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
  let change = cash - price;
  let totalCid = sumUpCid(cid);

  // Handle cases where cash-in-drawer is exact
  if (isCashInDrawerAndChangeExact(totalCid, change)) {
    return statusClosed(result, cid);
  }

  // Handle cases where cash-in-drawer is insufficient
  if (isCashInDrawerLessThanChange(totalCid, change)) {
    return statusInsufficient(result);
  }

  // Start handling cases where cash-in-drawer is sufficient

  // Convert cid array into an object
  let cidObject = convertCidArrayIntoObject(cid);

  DENOMINATIONS.forEach(denomination => {
    let amount = 0;
    while (change >= denomination.value && cidObject[denomination.type] > 0) {
      amount += denomination.value;
      change -= denomination.value;
      cidObject[denomination.type] -= denomination.value;
      change = Math.round(change * 100) / 100;
    }
    // Only include the denomination that was used 
    if (isDenominationTypeUsedForChange(amount)) {
      let arr = result.change;
      arr.push([denomination.type, amount]);
    }
  });

  // Handle cases where cid is sufficient but with no exact change (excess)
  if (isThereLeftOverChange(change)) {
    return statusInsufficient(result);
  }

  // Return back the change
  result.status = "OPEN";
  return result;
}

module.exports = checkCashRegister;


function isDenominationTypeUsedForChange(amount) {
  return amount > 0;
}

function isThereLeftOverChange(change) {
  return change > 0;
}

function isCashInDrawerLessThanChange(totalCash, change) {
  return totalCash < change;
}

function isCashInDrawerAndChangeExact(totalCash, change) {
  return totalCash == change;
}

function statusInsufficient(result) {
  result.status = "INSUFFICIENT_FUNDS";
  result.change = [];
  return result;
}

function statusClosed(result, cid) {
  result.status = "CLOSED";
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
