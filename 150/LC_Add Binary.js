/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aVal= 0, bVal = 0;
    for(let i = a.length - 1 ; i > 0; i--){
        aVal += Number(a.charAt(i)) * (2 ** i);
    }

    return aVal;
};

let a = "1010", b = "1011";
console.log(addBinary(a,b));