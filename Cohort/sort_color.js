/**
 * Sort the colors in the array in-place.
 * @param {number[]} nums - The input array of colors
 * @return {number[]} - The sorted array
 */
function sortColors(nums) {
  // Write your code here

  let k = nums.length - 1;
  let i = 0;
  let j = 0;

  while (i <= k) {
    if (nums[i] == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
      i++;
    } else if (nums[i] == 2) {
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      k--;
    } else {
      i++;
    }
  }
}

module.exports = { sortColors };
