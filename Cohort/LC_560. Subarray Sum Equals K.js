/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map =  new Map();
    let sum = 0; 

    for(let i = 0 ; i < nums.length ; i++){
        sum = sum + nums[i];

        if (map.has( sum - k )){

        }else {
            if (!map.has(sum - k )){
                map.set(sum , 1);

            }else {
                map.set(sum , map)
            }
        }

    }

};