/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let k = 0;
    while(i < nums.length){
        if(nums[i] !== val){
            nums[k++] = nums[i];
        }
        i++;
    }
    return k;
};

let nums=  [0,1,2,2,3,0,4,2], val = 2

console.log(removeElement(nums,val));