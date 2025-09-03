/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i =0; i < nums.length; i++ ){
        if (map.has(target - nums[i])){
            let ans = [-1,-1]
            ans[0] =map.get(target - nums[i])
            ans[1] = i
            return ans
        }else {
            map.set(nums[i], i)
        }
    }
};