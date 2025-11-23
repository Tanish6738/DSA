/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s = 0 ;
    let e = nums.length - 1;
    return solve(nums,target , s , e);
};

var solve = (nums, target , s, e)=>{
    if (s > e) return -1;
    let mid = Math.floor(s + (e - s) / 2 );
    if (nums[mid] == target){
        return mid;
    }
    if(nums[mid] < target){
        return solve(nums, target , mid + 1 , e)
    }else { 
        return solve(nums, target, s , mid - 1 )
    }
};