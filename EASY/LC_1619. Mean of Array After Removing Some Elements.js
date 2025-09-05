/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let l = arr.length;
    arr.sort((a, b) => a - b);
    let mean = 0 ;
    let numberOfElementToBeRemoved = l * 5 / 100;

    for(let i = numberOfElementToBeRemoved ; i < l - numberOfElementToBeRemoved ; i++){
        mean = mean + arr[i]
    }

    return mean /( l -   2 * numberOfElementToBeRemoved);

};

let arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3];

console.log(trimMean(arr));