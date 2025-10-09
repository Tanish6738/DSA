/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
        if (n < 0) {
        return 1 / myPow(x, -n);
    }
      // Base cases
    if (n === 0) return 1;
    if (n === 1) return x;

    // Recursive case
    let half = myPow(x, Math.floor(n / 2));
    
    if (n % 2 === 0) {
        return half * half;
    } else {
        return x * half * half;
    }
};


// Approach : 
//  base case = n == 1 ;
//  let half = myPow(x , Math.floor(n / 2))
//  if (n % 2 ==) return Math.round(half * half , 5);
//  else return Math.round(n * half * half, 5);
// 
