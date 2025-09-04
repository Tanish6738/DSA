/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    const set = new Set(nums);
    let max = -1;

    for (let num of nums) {
        if (num > 0 && set.has(-num)) {
            max = Math.max(max, num);
        }
    }

    return max;
};
let nums = [-10,8,6,7,-2,-3];
console.log(findMaxK(nums));