/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);
    let sum = 0;
    for(let i = 0 ; i < s.length ; i++){
        if (map.has(s.charAt(i))){
            if (map.get(s.charAt(i)) < map.get(s.charAt(i+1))){
                sum = sum - map.get(s.charAt(i));
            }else {
                sum = sum + map.get(s.charAt(i));
            }
        }
    }

    return sum;
};
let s = "MCMXCIV";
console.log(romanToInt(s));