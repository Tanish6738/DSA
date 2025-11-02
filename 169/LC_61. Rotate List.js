/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set();
    let j = 0;
    for(let i = 0 ; i < nums.length ;i++){
        if (set.has(nums[i])){
            continue;
        }else {
            set.add(nums[i]);
            nums[j++] = nums[i];
        }
    }

    return j;
};

let nums = [1,1,2];
console.log(removeDuplicates(nums));