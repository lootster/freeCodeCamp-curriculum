function addTogether(...arg) {
  let arr = [...arg];
  console.log(arr)
  if (arr.some(num => typeof num !== "number")) return undefined
  if (arr.length > 1) return arr.reduce((a, b) => a + b);
  return function add(y) {
    console.log(y + ":" + typeof y )
    if(typeof y !== "number") return undefined
    return arr[0] + y;
  }
}

module.exports = addTogether;