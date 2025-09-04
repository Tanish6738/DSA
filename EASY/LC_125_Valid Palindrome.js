/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length == 1) return true;
    s = filterS(s)
    let n = s.length % 2 == 0 ? Math.floor(s.length / 2) : Math.floor(s.length / 2 )+1;
    for(let i = 0;i < n ; i++){
        if(s.charAt(i) !== s.charAt(s.length - i - 1)){
            return false
        }
    }
    return true;
};

var filterS = (s)=>{
    let ans = "";
    s = s.toLowerCase()
 
    for(let i = 0 ; i <s.length;i++){
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <=122 ){
            ans = ans + s.charAt(i);
        }else if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57){
            ans = ans + s.charAt(i);
        } else if (s.charCodeAt(i) >= 67 && s.charCodeAt(i) <=90){
            ans = ans + s.charAt(i);
        }
    }
    return ans;
}

let s = "000A man, a plan, a canal: Panama100";
console.log(isPalindrome(s));