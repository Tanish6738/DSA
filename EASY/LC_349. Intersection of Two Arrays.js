/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr1 , arr2;
    
    if (nums1.length < nums2.length ){
        arr1 = [...nums1];
        arr2 = [...nums2];
    } else {
        arr1 = [...nums2];
        arr2 = [...nums1];
    }
    let set = new Set(arr1);
    let ans = [];
    for(let i = 0 ; i < arr2.length;i++){
        if (set.has(arr2[i])&& !ans.includes(arr2[i])) {
            ans.push(arr2[i]);
        }
    }

    return ans;
};

let nums1 = [1,2,2,1], nums2 = [2,2];

console.log(intersection(nums1,nums2));