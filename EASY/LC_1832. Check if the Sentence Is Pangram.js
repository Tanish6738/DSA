/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let sum = 2847;
    sentence = sentence.toLowerCase().split("");
    let set = new Set(sentence);

    for(let i of set){
        let val = i.charCodeAt(0);
        sum = sum - val;
    }

    return sum == 0 ? true : false;
};

let sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(checkIfPangram(sentence));