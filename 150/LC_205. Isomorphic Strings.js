/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;

    let map = new Map();

    for(let i = 0 ; i < s.length;i++){
        if(map.has(s.charAt(i))){
            if (map.get(s.charAt(i)) !== t.charAt(i)){
                return false;
            }
        }else {
            map.set(s.charAt(i), t.charAt(i));
        }
    }

    return true;
};

let s = "babc", t = "baba";
console.log(isIsomorphic(s,t));