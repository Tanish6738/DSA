/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == haystack) return 0;
    let j = needle.length;
    let i = 0;
    while(j <= haystack.length){
        let sub = haystack.slice(i , j);
        console.log(sub);
        if (sub === needle){
            return i;
        }
        i++,j++;
    }
    return -1;
};

let haystack = "sadbutsab", needle = "sad";
console.log(strStr(haystack,needle));