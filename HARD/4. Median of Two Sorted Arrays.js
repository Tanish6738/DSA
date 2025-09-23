/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = nums1.length - 1 ; 
    let j = nums2.length - 1 ;
    let arr = []

    while(i >=0 && j >=0){
        if ( nums1[i] > nums2[j] ){
            arr.unshift(nums1[i--]);
        }else {
            arr.unshift(nums2[j--])
        }
    }

    while(i >= 0 ) arr.unshift(nums1[i--])
    while(j >= 0 ) arr.unshift(nums2[j--])
    

    let n = arr.length;
    if (n % 2 === 1) {
        return arr[Math.floor(n / 2)];
    } else {
        return (arr[n / 2 - 1] + arr[n / 2]) / 2; 
    }
};

let nums1 = [2,2,4,4] ,nums2 =[2,2,2,4,4];
console.log(findMedianSortedArrays(nums1,nums2));