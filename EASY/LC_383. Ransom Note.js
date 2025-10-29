/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if ( ransomNote.length > magazine.length) return false;

    let ransomArr = new Array(123).fill(0);

    for(let i = 0 ;i <magazine.length ;i++){
        ransomArr[magazine.charCodeAt(i)] = ransomArr[magazine.charCodeAt(i)] + 1;
    }
    for(let i = 0 ;i <ransomNote.length ;i++){
        if (ransomArr[ransomNote.charCodeAt(i)] != 0) {
        ransomArr[ransomNote.charCodeAt(i)] = ransomArr[ransomNote.charCodeAt(i)] - 1;
    }else return false;
    }

    return true;
};

let ransomNote = "aa", magazine = "ab";
console.log(canConstruct(ransomNote,magazine));