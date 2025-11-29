/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();

    while( n !== 1 ){
        if (set.has(n)){
            return false;
        }else{
            set.add(n) ;
            n = sumOfDigits(n);
        }
    }

    return true;
};

function sumOfDigits(n){
    n = String(n);
    let sum = 0;
    for(let i = 0 ; i < n.length ; i++){
        let num = Number(n[i]) * Number(n[i])
         sum = sum + num
    }

    return sum;
}
console.log(isHappy(19));