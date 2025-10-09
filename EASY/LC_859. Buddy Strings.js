/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length != goal.length ) return false;
    let count = 0;
    let j = [];
    for(let i = 0 ; i < s.length ;i++){
        if (count < 3) {
            if (goal[i] != s[i]){
                j.push(i);
                count++;
            }
        }else {
            return false;
        }
    }

    if (diff.length === 0) {
        // same strings — need a repeated character to swap and keep same string
        return new Set(s).size < s.length;
    }

    if (diff.length !== 2) return false;
    return s[i] === goal[j] && s[j] === goal[i];


};

let s = "ab", goal = "ab";
console.log(buddyStrings(s,goal));