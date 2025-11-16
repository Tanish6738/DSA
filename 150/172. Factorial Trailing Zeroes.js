/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if (n <= 4 ) return 0;
    let count = 0;
    let i = 1;
    let temp = [];
    while( i <= n){
        if ( i % 5 == 0 ){
            temp.push(i);
        }
        i++;
    }
    
    for(let i = 0 ; i < temp.length; i++){
        let x = temp[i];
        while(x >= 5 && x % 5 == 0){
            count++;
            x = Math.floor(x / 5);
        }
    }

    return count;
};

console.log(trailingZeroes(30));