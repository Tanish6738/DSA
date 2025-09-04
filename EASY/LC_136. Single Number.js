/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = nums[0];
    for(let i = 1 ; i < nums.length ; i++){
        ans = ans ^ nums[i];
    }
    return ans;

};  

let nums = [4,1,2,1,2];
console.log(singleNumber(nums));