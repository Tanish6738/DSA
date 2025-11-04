/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if ( ransomNote.length > magazine.length) return false;

    let map = new Map();
    for(let i = 0 ; i<magazine.length ; i++){
        let char =magazine.charAt(i);
        map.set(char, (map.get(char) + 1 ) || 1);
    }
    let sum = ransomNote.length;
    for(let i = 0 ; i<ransomNote.length ; i++){
        let char =ransomNote.charAt(i);
        if (map.has(char) && map.get(char) !== 0){
            sum--;
            map.set(char , map.get(char) - 1);
        }else {
            return false;
        }
    }

    return true;
};


let ransomNote = "aa", magazine = "ab"
console.log(canConstruct(ransomNote,magazine));