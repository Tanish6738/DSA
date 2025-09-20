/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if ( nums.indexOf(target) == -1) return [-1,-1];
    let first = nums.indexOf(target);
    let second = nums.length - 1 - [...nums].sort((a,b)=> b - a).indexOf(target);

    return [first,second]
    
};

let nums = [5, 7, 7, 8, 8, 10], target = 8;

console.log(searchRange(nums,target));