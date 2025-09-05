/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Math.min(...nums) ;
    let max = Math.max(...nums);
    let GCD = 0;

    let s1 = factors(min);
    let s2 = new Set(factors(max));
    
    for(let i = s1.length -1 ; i >= 0; i--){
        if (s2.has(s1[i])) return s1[i];
    }

    return 1;

};

function factors(num){
    let ans = [];

    ans[0] = 1;

    for(let i = 2 ; i < Math.floor(num / 2) +1;i++){
        if (num % i == 0) ans.push(i);
    }
    ans.push(num);
    return ans;
}

let nums = [2,5,6,9,10];
console.log(findGCD(nums));