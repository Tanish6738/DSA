/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    let small = -1 ;

    for(let i = 0 ; i < nums.length ;i++){
        if (i % 10 == nums[i]){
            return i;
        }
    }

    return small
};

let  nums = [1,2,3,4,5,6,7,8,9,0];
console.log(smallestEqual(nums));