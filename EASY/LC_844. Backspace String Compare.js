/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    s = s.split("");
    t = t.split("");
    let a = [];
    let b = [];
    for(let i = 0; i<s.length;i++){
        if (s[i] == "#"){
            a.pop();
        }else {
            a.push(s[i]);
        }
    }   
    for(let i = 0; i<t.length;i++){
        if (t[i] == "#"){
            b.pop();
        }else {
            b.push(t[i]);
        }
    }   
    return a.join("") == b.join("");
};

let s = "ab#c", t = "ad#c";
console.log(backspaceCompare(s,t));