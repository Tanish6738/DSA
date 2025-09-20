/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let r1 = new Set("qwertyuiop".split(""));
  let r2 = new Set("asdfghjkl".split(""));
  let r3 = new Set("zxcvbnm".split(""));

  let ans = [];
    for(let word of words){
        w = word.toLowerCase().split("");
        if (r1.has(w[0])) {
            let canInclude = true;
            for(let i of w ){
                if (!r1.has(i)){
                    canInclude = false;
                    break;
                }
            }
            if (canInclude) ans.push(word);
        }
        else if (r2.has(w[0])){
            w = word.toLowerCase().split("");
            let canInclude = true;
            for(let i of w ){
                if (!r2.has(i)){
                    canInclude = false;
                    break;
                }
            }
            if (canInclude) ans.push(word);
        }
        else if (r3.has(w[0])) {
            w = word.toLowerCase().split("");
            let canInclude = true;
            for(let i of w ){
                if (!r3.has(i)){
                    canInclude = false;
                    break;
                }
            }
            if (canInclude) ans.push(word);
        }
        else continue
    }

  return ans;
};

let words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));
