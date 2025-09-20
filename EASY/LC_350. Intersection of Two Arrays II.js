/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let ans = [];

    let map1 = new Map();
    let map2 = new Map();

    for(let i = 0 ; i <nums1.length ; i++){
        if (map1.has(nums1[i])){
            map1.set(nums1[i], map1.get(nums1[i]) + 1);
        }else {
            map1.set(nums1[i],1);
        }
    }
    for(let i = 0 ; i <nums2.length ; i++){
        if (map2.has(nums2[i])){
            map2.set(nums2[i], map2.get(nums2[i]) + 1);
        }else {
            map2.set(nums2[i],1);
        }
    }

    for(let i of map1.keys()){
        if (map1.has(i) && map2.has(i)){
            let min_count = Math.min(map1.get(i), map2.get(i))
            for(let j = 0 ; j < min_count;j++){
            ans.push(i);
            }
        }
    }
    return ans;

};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
let result=[];

    for (let num of nums1){
        map.set(num,(map.get(num) ||0) + 1);        
    }

    for(let num of nums2){
        if(map.has(num) && map.get(num) >0){
            result.push(num);
            map.set(num,map.get(num)- 1);
        }
    }
return result;
};

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersect(nums1, nums2));