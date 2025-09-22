/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    
    let map = new Map();

    for(let i of nums ){
        if (map.has(i)){
            map.set(i, map.get(i)+1);
        }else {
            map.set(i,1);
        }
    }

    let Max = 0;
    
    for(let i of map.values()){
        if ( Max < i) Max = i;
    }
    let ans = 0;
    for(let i of map.keys()){
        if (map.get(i) == Max) ans = ans + map.get(i);
    }

    return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    
    let map = new Map();
    let Max = 1;
    for(let i of nums ){
        if (map.has(i) ){
            map.set(i, map.get(i)+1);
            if (Max < map.get(i))Max = map.get(i);
        }else {
            map.set(i,1);
        }
    }
    let ans = 0;
    for(let i of map.keys()){
        if (map.get(i) == Max) ans = ans + map.get(i);
    }

    return ans;
};

let  nums = [1,2,2,3,1,4];
console.log(maxFrequencyElements(nums));