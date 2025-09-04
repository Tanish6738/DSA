/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    while(i >=0){
        if (s.charAt(i) !== " "){
            s = s.slice(0 , i+1);
            break;
        }
        i--;
    }
    while(i >=0){
        if (s.charAt(i) == " "){
            break;
        }
        i--;
    }
    return s.length - i - 1;
};
s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s));