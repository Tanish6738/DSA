/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 1) return strs[0];
    let min = strs[0];
    for(let i of strs){
        if (i.length < min.length){
            min = i;
        }
    }

    for(let i = min.length ; i > 0;i--){
        let sub = min.substring(0 , i);
        if (strs.every((e)=>e.startsWith(sub))) return sub;
    }

    return "";
}
let strs=  ["cir","car"];
console.log(longestCommonPrefix(strs));