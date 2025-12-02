/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;      // stuck point
        farthest = Math.max(farthest, i + nums[i]);  
        if (farthest >= nums.length - 1) return true; 
    }

    return true;
};

let nums = [2,3,0,2,1,0,4,0,2,0];
console.log(canJump(nums));
