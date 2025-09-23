var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if mid is the target
        if (nums[mid] === target) return mid;

        // Determine which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Target in left half
            } else {
                left = mid + 1;  // Target in right half
            }
        } else {
            // Right half is sorted
            if (target >= nums[mid] && target <= nums[right]) {
                left = mid ;  // Target in right half
            } else {
                right = mid - 1; // Target in left half
            }
        }
    }

    // Target not found
    return -1;
};

// Example usage:
console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Output: -1









/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.includes(target)) return false;

    return nums.indexOf(target);
};

let nums = [4,5,6,7,0,1,2], target = 0;
console.log(search(nums,target));