/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    // Create prefix sum array for O(1) range queries
    this.prefixSum = new Array(nums.length + 1).fill(0);
    
    // Build prefix sum: prefixSum[i] = sum of nums[0] to nums[i-1]
    for (let i = 0; i < nums.length; i++) {
        this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // Sum from left to right = prefixSum[right+1] - prefixSum[left]
    return this.prefixSum[right + 1] - this.prefixSum[left];
};
