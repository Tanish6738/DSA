/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length < s.length) return [];
    let n = p.length ;

    for(let i = 0 ; i < s.length ; i++){
        let sub = s.substring(i , i + n);

    }
};


const isAnagram = (s1 , s2)=>{
    
};

let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s,p));