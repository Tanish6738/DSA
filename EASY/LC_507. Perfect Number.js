/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) return false;
    
    let sum = 1; // 1 is always a divisor
    let sq = Math.floor(Math.sqrt(num));

    for(let i = 2; i <= sq; i++){
        if (num % i == 0) {
            sum += i; // add the divisor
            
            // add the corresponding divisor pair, but avoid double counting for perfect squares
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    
    return sum === num;
};

let num = 28;
console.log(checkPerfectNumber(num)); // true

// Test with other cases
console.log(checkPerfectNumber(6));  // true
console.log(checkPerfectNumber(7));  // false
console.log(checkPerfectNumber(1));  // false