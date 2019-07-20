function uniteUnique(...arg) {
  let arr = [...arg];

  let joinArr = [];
  for (let i = 0; i < arr.length; i++) {
    joinArr = joinArr.concat(arr[i]);
  }

  let finalArr = joinArr.filter((item, index) => {
    return joinArr.indexOf(item) == index;
  });

  return finalArr;
}

module.exports = uniteUnique;
