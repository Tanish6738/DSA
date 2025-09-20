/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if ( n <= 0) return false
    if ( n == 1 ) return true;
    let factor =new Set([2,3,5]);
    let factors = new Set(primeFactors(n));

    for(let f of factors){
        if ( !factor.has(f) ) return false;
    }

    return true;
};
var primeFactors = (n)=>{
    if ( n <= 0) return 0;
    if ( n == 1 ) return 1;

    let ans = [];

    for(let i = 2 ; i < Math.floor(n / 2) + 1 ; i++){
        if ( n % i == 0 && isPrime(i)) ans.push(i);
    }
    if (isPrime(n)) ans.push(n);
    return ans;
}

var isPrime = (n) =>{
    if ( n <= 0 ) return false ;
    if ( n == 1  ) return true;

    for(let i = 2 ; i < Math.floor(n / 2 ) + 1 ; i++){
        if ( n % i == 0 ) return false;
    }
    return true;
}


// ...existing code...
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false;
    for (const p of [2, 3, 5]) {
        while (n % p === 0) n /= p;
    }
    return n === 1;
};

// Quick test
console.log(isUgly(14));  // false
console.log(isUgly(6));   // true
console.log(isUgly(1));   // true
// ...existing code...

let n = 14;

console.log(isUgly(n));