/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {

    let count = 0;
    // let n = pref.length;
    for(let word of words){
        if (word.startsWith(pref)) count++;
    }

    return count;
};

let words = ["pay","attention","practice","attend"], pref = "at";
console.log(prefixCount(words,pref));