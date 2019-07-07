function fearNotLetter(str) {
  let alphabetStr = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabetStr.indexOf(str.charAt(0));

  let result = undefined;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (count < 1 && alphabetStr[index + i] !== str[i]) {
      result = alphabetStr[index + i];
      count++;
    }
  }

  return result;
}

module.exports = fearNotLetter;
