/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;

    for(let i = 0 ; i< n;i++){
        if (nums[i] <= 0 || nums[i] > n){
            nums[i] = n + 1;
        }
    }
    for(let i = 0 ; i< n;i++){
        let val = Math.abs(nums[i]);
        if (val <= n) {
            nums[val - 1] = -Math.abs(nums[val - 1]);
        }
    }
    // Step 3: Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;

};

let nums = [2,1];
console.log(firstMissingPositive(nums));