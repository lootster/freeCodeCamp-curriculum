function palindrome(str) {
  let newString = str.replace(/[\W_]/g, "").toLowerCase();
  let reversedString = newString
    .split("")
    .reverse()
    .join("");
  return newString === reversedString;
}

module.exports = palindrome;
