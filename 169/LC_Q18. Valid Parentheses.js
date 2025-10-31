/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let top = null;
    for(let i = 0 ; i < s.length ;i++){
        let char = s.charAt(i);
        if (char == "[" ||char == "(" || char == "{" ){
            stack.push(char);
        }else {
            if(stack.length == 0) return false;
            top = stack.pop();
            if( (char == "]" && top != "[") ||
                (char == "}" && top != "{") ||
                (char == ")" && top != "(") ){
                    return false;
                }
        }
    }
    return stack.length == 0;
};


let s = "([])";

console.log(isValid(s));