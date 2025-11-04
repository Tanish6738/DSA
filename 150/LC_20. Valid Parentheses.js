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
           if (stack.length == 0) return false;
           else{
                top = stack[stack.length - 1];
                if (top == "[" && char == "]") stack.pop();
                if (top == "{" && char == "}") stack.pop();
                if (top == "(" && char == ")") stack.pop();
           }
        }
    }
    return stack.length == 0;
};


let s = "([)]" ;
console.log(isValid(s));