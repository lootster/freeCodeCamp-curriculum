function binaryAgent(str) {
  let binaryArr = str.split(" ");
  let stringArr = [];

  for (let i = 0; i < binaryArr.length; i++) {
    stringArr.push(String.fromCharCode(parseInt(binaryArr[i], 2)));
  }

  let string = stringArr.join("");

  return string;
}

module.exports = binaryAgent;
