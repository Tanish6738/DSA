/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0 ;
    let r = nums.length- 1;
    while(l <=r ){
        let mid = Math.floor(l - (l - r) / 2);
        if (nums[mid] == target ) return mid;
        else if ( nums[mid] > target){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

let nums = [1,3,5,6], target = 5;
console.log(searchInsert(nums,target));