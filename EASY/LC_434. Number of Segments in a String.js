/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.trim().length == 0 ) return 0;

    s = s.split(" ");
    let count = 0 ;

   for(let i = 0 ; i < s.length ; i++){
        if (s[i].trim().length != 0){
            count++;
        }
   }

   return count;
};

let  s = "                    ";

console.log(countSegments(s));