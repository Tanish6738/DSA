/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

};


let nums = [2, 7, 9, 3, 1];
console.log(rob(nums));



// approach 

`

    Solve function takes 4 args i , j , arr, sum

    function will makes two calls on the basis of i and j 

    where i reps : current first element nd j reps : value current second element

    after the removing of previous i and j from the array to make the two calls 

    one by adding current i val and one by current j val to the sum 

    until their are no element to add or when the i == j ,(i , j ) is greater than arr.length

`
