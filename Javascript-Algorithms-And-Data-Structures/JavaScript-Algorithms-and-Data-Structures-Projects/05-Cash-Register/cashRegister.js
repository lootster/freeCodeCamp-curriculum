const { DENOMINATIONS, MESSAGE } = require("./constants");

function calculateChangeDueByDenomination(price, cash, cashInDrawerArray) {
  let result = { status: null, change: [] };
  let changeDue = cash - price;
  let cashInDrawer = sumUpCashInDrawer(cashInDrawerArray);

  // Handle cash in drawer is equal to change due
  if (isCashInDrawerEqualToChangeDue(cashInDrawer, changeDue)) {
    return statusClosed(result, cashInDrawerArray);
  }

  // Handle cash in drawer is less than change due
  if (isCashInDrawerLessThanChangeDue(cashInDrawer, changeDue)) {
    return statusInsufficient(result);
  }

  // Handle cash in drawer is more than change due
  if (hasExactChange(changeDue, cashInDrawerArray, result)) {
    // Return back the change due
    return statusOpenReturnChangeDue(result);
  } else {
    // No exact change
    return statusNoExactChange(result);
  }
}

module.exports = calculateChangeDueByDenomination;


function statusOpenReturnChangeDue(result) {
  result.status = MESSAGE.STATUS_OPEN_MSG;
  return result;
}

function getChangeInDifferentDenomination(changeDue, cashInDrawer, result) {
  // Convert cid array into an object
  let cidObject = convertCidArrayIntoObject(cashInDrawer);
  // Loop through DENOMINATIONS array
  DENOMINATIONS.forEach(denomination => {
    let amount = 0;
    while (
      changeDue >= denomination.value &&
      cidObject[denomination.type] > 0
    ) {
      amount += denomination.value;
      changeDue -= denomination.value;
      cidObject[denomination.type] -= denomination.value;
      changeDue = Math.round(changeDue * 100) / 100;
    }
    calculateChange(amount, result, denomination);
  });
  return changeDue;
}

function calculateChange(amount, result, denomination) {
  // Include only denomination types that was used for change, to the result
  if (isDenominationTypeUsedForChange(amount)) {
    let arr = result.change;
    arr.push([denomination.type, amount]);
  }
}

function isDenominationTypeUsedForChange(amount) {
  return amount > 0;
}

function hasExactChange(changeDue, cashInDrawer, result) {
  let remainingChange = getChangeInDifferentDenomination(
    changeDue,
    cashInDrawer,
    result
  );
  if (remainingChange === 0) {
    return true; // has exact change
  } else {
    return false; // has no exact change
  }
}

function isCashInDrawerLessThanChangeDue(totalCash, change) {
  return totalCash < change;
}

function isCashInDrawerEqualToChangeDue(totalCash, change) {
  return totalCash == change;
}

function statusInsufficient(result) {
  result.status = MESSAGE.STATUS_INSUFFICIENT_MSG;
  result.change = [];
  return result;
}

function statusNoExactChange(result) {
  result.status = MESSAGE.STATUS_NO_EXACT_CHANGE_MSG;
  result.change = [];
  return result;
}

function statusClosed(result, cid) {
  result.status = MESSAGE.STATUS_CLOSED_MSG;
  result.change = cid;
  return result;
}

function sumUpCashInDrawer(arr) {
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
