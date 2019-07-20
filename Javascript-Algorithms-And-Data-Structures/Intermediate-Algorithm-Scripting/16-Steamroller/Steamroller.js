function steamrollArray(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator.concat(validate(currentValue));
  }, []);
}

module.exports = steamrollArray;


function validate(currentValue) {
  return Array.isArray(currentValue)
    ? steamrollArray(currentValue)
    : currentValue;
}
