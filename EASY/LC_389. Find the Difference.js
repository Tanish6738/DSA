/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr =new Array(123).fill(0);

    for(let i = 0 ; i<s.length;i++){
        arr[s.charCodeAt(i)] = arr[s.charCodeAt(i)] + 1;
    }
    for(let i = 0 ; i<t.length;i++){
        arr[t.charCodeAt(i)] = arr[t.charCodeAt(i)] - 1;
    }
    for(let i = 97 ; i<=122;i++){
        if (arr[i] == -1) {
            return String.fromCharCode(i);
        }
    }
};

let s = "abcd", t = "abcde";
console.log(findTheDifference(s,t));