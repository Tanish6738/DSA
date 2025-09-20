/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    for(let i = 0 ; i < letters.length;i++){
        if (letters[i].charCodeAt(0) > target.charCodeAt(0)){
            return letters[i];
        }
    }

    return letters[0];
};

let letters = ["c","f","j"], target = "c";
console.log(nextGreatestLetter(letters,target));