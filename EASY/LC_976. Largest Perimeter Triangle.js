/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    // For a valid triangle, only need to check if sum of two smaller sides > largest side
    if (nums[i + 1] + nums[i + 2] > nums[i]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }

  return 0;
};

let isValid = (a, b, c) => {
  if (a + b > c || a + c > b || b + c > a) {
    return true;
  } else {
    return false;
  }
};

let nums = [1, 2, 1, 10];
console.log(largestPerimeter(nums));
