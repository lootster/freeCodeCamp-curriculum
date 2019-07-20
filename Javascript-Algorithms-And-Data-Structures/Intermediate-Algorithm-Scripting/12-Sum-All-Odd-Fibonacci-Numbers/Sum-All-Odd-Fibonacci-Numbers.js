function sumFibs(num) {
  let arr = [0, 1];
  let total = 0;

  while (lastNumberInArray(arr) <= num) {
    total = arr
      .filter(number => isOddNumber(number))
      .reduce((a, b) => a + b);
    let nextFibonnaciNumber = sumLastTwoNumberInArray(arr);
    arr.push(nextFibonnaciNumber);
  }

  return total;
}

module.exports = sumFibs;


function isOddNumber(number) {
  return number % 2 !== 0;
}


function lastNumberInArray(arr) {
  return arr[arr.length - 1];
}

function sumLastTwoNumberInArray(arr) {
  return lastNumberInArray(arr) + arr[arr.length - 2];
}
