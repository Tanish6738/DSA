/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i =0 ;
    let j = nums.length - 1;
    while (i < j)
    {
    let mid = i + Math.floor((j - i) / 2);
        if (nums[mid] == target ) return mid;
        else if ( nums[mid] > target ){
            j = mid - 1;
        }else {
            i = mid + 1;
        }
    }
};

let nums = [-1,0,3,5,9,12], target = 9;
console.log(search(nums,target));