/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let arr = new Array(nums.length+1).fill(false);

    for(let i of nums){
        arr[i] = true;
    }

    for(let i = 0 ; i < arr.length; i++){
        if ( !arr[i] ) return i
    }

};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let total = 0;
    let sum = 0;
    nums.forEach((a) => total += a)
    for(let i = 0; i < nums.length + 1; i++){
        sum += i;
    }
    return sum - total;
};

let  nums = [3,0,1];

console.log(missingNumber(nums));