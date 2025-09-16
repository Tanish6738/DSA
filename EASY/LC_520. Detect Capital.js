/**
 * @param {string} word
 * @return {boolean}
 */""
var detectCapitalUse = function(word) {
    word = word.split("");
    let capital = 0;
    let small = 0;
    for(let i = 0 ; i < word.length; i++ ){
        let s = word[i].charCodeAt(0);
        if (s <= 122 && s>= 97 ){
            small++;
        } else if (s >= 65 && s<= 90) {
            capital++;
        } else{
            return false
        }
    }

    if ( capital == word.length || small == word.length){
        return true
    } else if (capital == 1 && small == word.length - 1 && (word[0].charCodeAt(0) >= 65 && word[0].charCodeAt(0) <= 90 )){
        return true
    } else{
        return false
    }
};

let word = "kinG";
console.log(detectCapitalUse(word));