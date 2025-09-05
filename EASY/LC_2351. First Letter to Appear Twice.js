/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let map = new Map();

    for(let i = 0 ; i < s.length;i++){
        if (map.has(s.charAt(i)) && map.has(s.charAt(i)) == 1){
            return s.charAt(i)
        }else {
            map.set(s.charAt(i), 1);
        }
    }
};

let s = "abccbaacz";
console.log(repeatedCharacter(s));