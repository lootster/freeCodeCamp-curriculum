const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) {
  let result = [];
  // loop through string
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    // get char and process
    if (ALPHA.includes(char)) {
      // if char is alphanumeric, perform Caesars Cipher
      let charAfterRot13 = performCaesarsCipher(char);
      // push the new char into array
      result.push(charAfterRot13);
    } else {
      // if char is not alphanumeric, push char into array
      result.push(char);
    }
  }
  return result.join("");
}

module.exports = rot13;


function performCaesarsCipher(char) {
  let charIndex = ALPHA.indexOf(char);
  let charIndexPlus13 = charIndex + 13;

  // Get the new index position after shifting 13 position
  let newIndex =
    charIndexPlus13 >= ALPHA.length
      ? charIndexPlus13 - ALPHA.length
      : charIndexPlus13;

  return ALPHA[newIndex];
}
