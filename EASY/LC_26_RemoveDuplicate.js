/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0 ;
    let k = 0;

    while( i < nums.length){
        
        if (nums[i] !== nums[i+1]){
            nums[k++] = nums[i]
        }
        i++;
    }
    return k;
};

let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));