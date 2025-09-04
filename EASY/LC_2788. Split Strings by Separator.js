/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
return words.join(separator).split(separator).filter(Boolean);
};


let words = ["one.two.three","four.five","six"], separator = ".";
console.log(splitWordsBySeparator(words,separator));