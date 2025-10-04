/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (isPalindrome(s)) return s;
    let set = new Set();
    let maxLength = 0;
    let ans = "";

    for(let i = 0 ; i < s.length ; i++){
        for(let j = i ; j <= s.length;j++ ){
            let subString = s.slice(i , j);
            if (isPalindrome(subString)){
                if (!set.has(subString)) {
                    set.add(subString);
                    if (maxLength < subString.length){
                        maxLength = subString.length;
                        ans = subString;
                    }
                };
            }
        }
    }
    return ans;
};

var isPalindrome = (str) => {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

let s = "bb";
console.log(longestPalindrome(s));
