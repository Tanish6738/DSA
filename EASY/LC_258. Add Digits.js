/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let ans = sum(num) ;

    while( ans >=10){
        ans = sum(ans)
    }

    return ans;
};

var sum = (num) =>{
    num = String(num);
    let sum = 0;

    for(let i =  0 ; i < num.length;i++){
        sum = sum + Number(num.charAt(i));
    }
    return sum;
}

let num = 38;
console.log(addDigits(num));