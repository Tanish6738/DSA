/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let ans = new Array(nums.length+1).fill(0);
    let arr = [];
    for(let i = 0 ; i< nums.length ; i++){
        ans[nums[i]] = ans[nums[i]] + 1;
        if (ans[nums[i]] == 2 ) arr.push(nums[i])
    }
    return arr;  
};

let nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));