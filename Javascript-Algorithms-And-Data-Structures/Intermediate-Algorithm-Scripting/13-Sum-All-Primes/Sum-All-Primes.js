function sumPrimes(num) {
  let primeArray = [];

  while (num > 1) {
    let prime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    if (prime) primeArray.push(num);
    num--;
  }
  let result = primeArray.reduce((a, b) => a + b);
  return result;
}

module.exports = sumPrimes;
