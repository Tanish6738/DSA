/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s =s.trim();
    let sub = "";
    for(let i =0; i < s.length ; i++){
        if (s.charAt(i) == " " && s.charAt(i+1) == " "){
            continue;
        }else{
            sub = sub + s.charAt(i);
        }
    }
    sub = sub.split(" ");
    let i = 0 , j = sub.length - 1;
    while( i <= j ){
        [sub[i], sub[j]] = [sub[j] , sub[i]];
        i++,j--;
    }

    return sub.join(" ");
};

let s = "  a good   example";
console.log(reverseWords(s));