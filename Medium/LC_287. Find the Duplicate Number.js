/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let arr = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = arr[nums[i]] + 1;
    if (arr[nums[i]] == 2) return arr[nums[i]];
  }
};

let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
