/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    if (nums.length == 1 ) return 0;
    let map = new Map();
    map.set(0, -1)
    let min_length = 0;
    let count = 0;


    for(let i = 0 ;i<nums.length ;i++){
        count += nums[i] == 0 ? -1 : 1;
        if (map.has(count)){
            min_length = Math.max(min_length, i - map.get(count));
        }else {
            map.set(count, i);
        }
    }
    return min_length;
};

let nums = [0,1,1,1,1,1,0,0,0];

console.log(findMaxLength(nums));