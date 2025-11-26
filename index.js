/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    
    let start = 0; 
    let end = x;
    let result = 0;

    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        
        if (mid * mid === x){
            return mid;
        } else if (mid * mid < x){
            result = mid;  // Store this as potential answer
            start = mid + 1;  // Search in right half
        } else {
            end = mid - 1;  // Search in left half
        }
    }
    
    return result;
};

console.log(mySqrt(25

    
));