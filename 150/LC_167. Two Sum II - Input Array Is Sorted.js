/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let f = 0;
    let l = numbers.length - 1;

    while( f < l ){
        let sum = numbers[f] + numbers[l];;
        if (sum === target ){
            return [f+1,l+1];
        }else if (sum < target){
            f++;
        }else {
            l--;
        }
    }

    return []
};

let numbers = [0,0,3,4], target = 9;
console.log(twoSum(numbers,target));