/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split("");
    let st = []
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == "[" || s[i] == "(" || s[i] == "{"){
            st.push(s[i]);
        }else {
            if (st.length == 0) return false ;
            else if (s[i] == ")" && st[st.length - 1] === "("){
                st.pop()
            }
            else if (s[i] == "}" && st[st.length - 1] === "{" ){
                st.pop()
            }
            else if (s[i] == "]" && st[st.length - 1] === "["){
                st.pop()
            }else {
                return false;
            }
        }
    }
    return st.length == 0;
};

let str = "(){}[]"
console.log(isValid(str));