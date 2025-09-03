/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let smallestLength = 0;
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < strs[smallestLength].length) {
      smallestLength = i;
    }
  }
  let min_str = strs[smallestLength];
  let j = min_str.length-1;
  while (j >= 0){
    let prefix = min_str.slice(0, j+1);
    if (strs.every(str => str.startsWith(prefix))) {
      return prefix;
    }
    j--;
  }
  return "";
};


let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));