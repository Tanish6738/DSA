/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     x = String(x);
//     let n = x.length % 2 == 0 ? (x.length / 2 ) : (x.length / 2) + 1;
//         for(let i = 0 ; i < n ;i++){
//             if(x.charAt(i) != x.charAt(x.length - 1 - i)){
//                 return false
//             }
//         }


//         return true
    
// };


var isPalindrome = function(x) {
    return x === reverse(x);
};

let reverse = function(x) {
    let ans = 0;

    while(x > 0){
        let r = x % 10;
        ans = ans * 10;
        ans = (ans + r );
        x =Math.floor( x / 10);
    }

    return ans;
}

let x = 12321;
console.log(isPalindrome(x));