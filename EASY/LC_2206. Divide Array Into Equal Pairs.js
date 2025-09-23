/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    
    if (nums.length % 2 != 0  ) return false;

    let map = new Map();

    for(let i = 0 ; i < nums.length ;i++){
        map.set(nums[i] , (map.get(nums[i]) || 0 ) + 1);
    }
    
    for(let i of map.keys()){
        if (map.get(i) % 2 != 0 || map.get(i) == 1) return false
    }

    return true;
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let obj = {};
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        }
        else {
            obj[nums[i]]++
            if (obj[nums[i]] === 2) {
                pairs++
                obj[nums[i]] = 0;
            }
        }
    }
    return pairs === nums.length / 2
};

let nums = [3,2,3,2,2,2];

console.log(divideArray(nums));