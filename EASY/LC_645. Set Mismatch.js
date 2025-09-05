/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let arr = new Array(nums.length+1).fill(0);
    let ans = []
    for(let i = 0 ; i < nums.length; i++){
        arr[nums[i]]++;
    }
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === 2) ans[0]=i;
        if(arr[i] === 0) ans[1]=i;
    }
    return ans;
};

let nums = [1,2,2,4];

console.log(findErrorNums(nums));