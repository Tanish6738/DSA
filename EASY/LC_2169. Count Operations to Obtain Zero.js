/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let op = 0;

    while(num1 != 0 && num2 != 0){
        if (num1 >= num2 ) {
            num1 = num1 - num2;
            op++;
        }else {

            num2 = num2 - num1;
            op++;
        } 
    }

    return op
};

let num1 = 2, num2 = 3;
console.log(countOperations(num1,num2));