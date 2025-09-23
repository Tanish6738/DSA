/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let answer = [];
    let map = new Map();
    let pairs = 0;
    let unpairs = 0;
    for(let i = 0 ; i < nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0 )+ 1);
    }

    for(let i of map.keys()){
        if ( map.get(i) % 2 == 0 ) pairs = pairs + (map.get(i) / 2 );
        else if  (map.get(i) % 2 == 1){
            pairs = pairs + Math.floor(i / 2 );
            unpairs++;
        }
    }
     
    return [pairs,unpairs];
};

let nums = [1,3,2,1,3,2,2];

console.log(numberOfPairs(nums));