function smallestCommons(arr) {
  let list = generateAscendingList(arr);

  let commonMultiple = null;
  let arrayMultiple = list;

  while (commonMultiple === null) {
    let maxValue = Math.max(...arrayMultiple);
    let commonMultipleFound = checkForCommonMultiple(arrayMultiple, maxValue);

    if (commonMultipleFound) {
      commonMultiple = maxValue;
      break;
    }

    arrayMultiple = arrayMultiple.map((item, index) => {
      return item < maxValue ? item + list[index] : item;
    });
  }
  return commonMultiple;
}

module.exports = smallestCommons;


function checkForCommonMultiple(arrayMultiple, maxValue) {
  return arrayMultiple.every(item => maxValue % item === 0);
}

function generateAscendingList(arr) {
  let list = [];
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    list.push(i);
  }
  return list;
}
