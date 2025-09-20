// /**
//  * @param {number[]} nums
//  * @param {number[]} index
//  * @return {number[]}
//  */
// var createTargetArray = function(nums, index) {
//     let ans = [];

//     for(let i = 0 ; i<nums.length ; i++){

//             insert(ans, nums[i] , index[i]);
//         }

//     return ans;
// };

// var insert = (arr , val , index )=>{
//     // extend array by one (placeholder)
//     arr.push(val);
//     // shift right to make room
//     for (let i = arr.length - 1; i > index; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[index] = val;
//     return arr;
// }


/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {

    let target = [];

    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }

    return target;
};





let nums=  [0,1,0], index = [0,1,0]
console.log(createTargetArray(nums,index));
// console.log(insert(nums,3,2));