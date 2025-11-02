/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let size = nums.length;
    k = k % size;
    
    if (k === 0) return;
    
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };
    
    reverse(0, size - 1);
    reverse(0, k - 1);
    reverse(k, size - 1);
};

let nums = [1,2,3,4,5,6,7], k = 3;
rotate(nums, k);