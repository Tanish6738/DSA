/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length == 1 ) return [strs];
    let temp = [];
    for(let i = 0 ; i < strs.length ; i++){
        let sub  =strs[i].split("");
        sub.sort((a,b)=> a.charCodeAt(0) - b.charCodeAt(0));
        sub = sub.join("");
        temp[i] = sub;
    }
    let map = new Map();

    for(let i = 0 ; i < temp.length ;i++){
      if (map.has(temp[i])){
        let arr = map.get(temp[i]);
        map.set(temp[i],[...arr, i]);
      }else{
        map.set(temp[i], [i]);
      }
    }
    temp = [];
    for(let arr of map.values()){
      let a = [];
        for(let i = 0 ; i < arr.length;i++){
          a.push(strs[arr[i]]);
        }
        temp.push(a)
    }
    return temp;
};

let  strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));