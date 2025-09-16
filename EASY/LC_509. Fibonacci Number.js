/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if ( n == 1 || n ==0) return n;

//     return fib(n - 1) + fib(n -2);

// };


var fib = function(n) {
    let n1 = 0;
    let n2 = 1 ;
    if ( n <=0)return 0;
    let ans = 0;


    for(let i = 1 ;i < n;i++){
        ans = n1 + n2;
        n1 = n2 ;
        n2 = ans;
    }

    return ans
};

console.log(fib(3));