/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  pattern = pattern.split("");
  s = s.split(" ");

  let pset = new Set(pattern);
  let sset = new Set(s);

  if (pset.size !== sset.size || pattern.length !== s.length) return false;

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) == pattern[i]) {
        continue;
      } else {
        return false;
      }
    } else {
      map.set(s[i], pattern[i]);
    }
  }

  return true;
};

let pattern = "baa",
  s = "dog dog dog";

console.log(wordPattern(pattern, s));
