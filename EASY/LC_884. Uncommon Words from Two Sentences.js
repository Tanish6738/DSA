/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(" ");
    s2 = s2.split(" ");
    let ans = [];
    let map = new Map();

    for(let i = 0 ; i < s1.length;i++){
        if (map.has(s1[i])){
            map.set(s1[i], map.get(s1[i]) + 1);
        }else {
            map.set(s1[i], 1);
        }
    }
    for(let i = 0 ; i < s2.length;i++){
        if (map.has(s2[i])){
            map.set(s2[i], map.get(s2[i]) + 1);
        }else {
            map.set(s2[i], 1);
        }
    }

    for(let i of map.keys()){
        if (map.get(i) == 1){
            ans.push(i)
        }
    }

    return ans;

};

let s1 = "s z z z s", s2 = "s z ejt";
console.log(uncommonFromSentences(s1,s2));