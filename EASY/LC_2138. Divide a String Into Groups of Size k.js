/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let i = 0 ;
    let j = i + k;
    let ans = [];
    while(i < s.length){
        let x = s.slice(i ,j);
        console.log(x);
        if (x.length === k){
            ans.push(x);
        }else if(x.length < k) {
            
            while(x.length != k){
                x = x + fill;
            }
            ans.push(x);
        }
        i = i+k;
        j = i + k;
    }
    return ans;
};

let s = "abcdefghij", k = 3, fill = "x";
console.log(divideString(s, k, fill));