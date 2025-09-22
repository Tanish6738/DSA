/**
 * @param {string} word
 * @return {boolean}
 */
function isValid(word) {
  if (word.length < 3) return false;

  const vowels = "aeiouAEIOU";
  let vowelFound = false;
  let consonantFound = false;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];

    if (
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z")
    ) {
      if (vowels.includes(ch)) {
        vowelFound = true;
      } else {
        consonantFound = true;
      }
    } else if (ch >= "0" && ch <= "9") {
      continue; // digits are allowed but don’t count
    } else {
      return false; // invalid character
    }
  }

  return vowelFound && consonantFound;
}

let word = "234Adas";

console.log(isValid(word));