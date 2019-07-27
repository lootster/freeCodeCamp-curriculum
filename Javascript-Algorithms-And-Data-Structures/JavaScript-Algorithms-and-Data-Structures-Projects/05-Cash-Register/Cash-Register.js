const DENOMINATION = [
  { currency: "ONE HUNDRED", value: 100.0 },
  { currency: "TWENTY", value: 20.0 },
  { currency: "TEN", value: 10.0 },
  { currency: "FIVE", value: 5.0 },
  { currency: "ONE", value: 1.0 },
  { currency: "QUARTER", value: 0.25 },
  { currency: "DIME", value: 0.1 },
  { currency: "NICKEL", value: 0.05 },
  { currency: "PENNY", value: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  let result = { status: null, change: [] };
  let change = cash - price;
  let totalCash = sumTotalCid(cid);

  if (totalCash == change) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }

  if (totalCash < change) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  let cashRegister = convertCidArraytoObject(cid);

  DENOMINATION.forEach((item, index) => {
    let amount = 0;
    while (change >= item.value && cashRegister[item.currency] > 0) {
      amount += item.value;
      change -= item.value;
      cashRegister[item.currency] -= item.value;
      change = Math.round(change * 100) / 100;
    }
    if (amount > 0) {
      let arr = result.change;
      arr.push([item.currency, amount]);
    }
  });

  if (change > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }

  result.status = "OPEN";
  return result;
}

module.exports = checkCashRegister;

function sumTotalCid(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i][1]);
  }
  return total.toFixed(2);
}

function convertCidArraytoObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}
