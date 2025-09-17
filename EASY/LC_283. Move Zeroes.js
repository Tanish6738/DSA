/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let nz = 0;
    let i = 0 ; j = 0;

    while( i < nums.length){
        if(nums[i] != 0 ) {
            nums[j++] = nums[i++];
        }else {
            nz++;
            i++;
        }
    }
    
    for(let i = j ; i < nums.length;i++){
        nums[i] = 0;
    }

    return nums;
};


let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));