/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    if (words.length == 1 && isPal(words[0])) return words[0];

    for(let i = 0 ;i <words.length ; i++){
        if (isPal(words[i])){
            return words[i];
        }
    }
    return ""
};

let isPal = (word) => {
    if (word.length == 1 ) return true;

    let n = word % 2 == 0 ? Math.floor(word.length / 2 ) :Math.floor(word.length / 2 ) + 1
    for(let i = 0 ; i < n ;i++){
        if (word.charAt(i) != word.charAt(word.length-1 - i) ){
            return false
        }
    }
    return true
}

let words = ["abc","car","ada","racecar","cool"];
console.log(firstPalindrome(words));