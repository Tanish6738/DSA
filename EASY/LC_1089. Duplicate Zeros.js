/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var duplicateZeros = function(nums) {
    let arr = new Array(nums.length );
    let j = 0;
    let i = 0;
    while( j < arr.length ){
        if ( nums[i] != 0){
            arr[j++] = nums[i++];
        }
        if ( nums[i] == 0){
            arr[j++] = nums[i];
            arr[j++] = nums[i++];
        }
    }
    for(let i = 0 ; i < arr.length;i++  ){
        nums[i] = arr[i];
    }

};

let  nums = [1,0,2,3,0,4,5,0];

console.log(duplicateZeros(nums));