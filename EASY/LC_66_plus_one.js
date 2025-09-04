/**
 * @param {number[]} arr
 * @return {number[]}
 */
var plusOne = function(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i]++;
        if (arr[i] < 10) {
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
};

let arr =[1,9,9]
console.log(plusOne(arr));