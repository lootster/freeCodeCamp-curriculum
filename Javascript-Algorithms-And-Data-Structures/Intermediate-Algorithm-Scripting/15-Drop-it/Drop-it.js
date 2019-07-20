function dropElements(arr, func) {
  let result = [];
  let booleanArr = arr.map(func);

  let toPush = false;

  booleanArr.forEach((item, index) => {
    if (toPush || booleanArr[index]) {
      result.push(arr[index]);
      toPush = true;
    }
  });

  return result;
}

module.exports = dropElements;
