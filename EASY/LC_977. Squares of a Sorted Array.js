/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((e)=>{
        return e * e;
    }).sort((a,b) => a-b);
};

let nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums));
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   
    let n = nums.length;
    let left =0;
    let right = n-1;
    let result = new Array(n);
    let pos = n-1;

    while(left<=right){
        let leftsq = nums[left]*nums[left];
        let rightsq = nums[right]*nums[right];

        if(leftsq>rightsq){
            result[pos]=leftsq;
            left++;
        }else{
            result[pos]=rightsq;
            right--;
        }
        pos--;
    }
    return result;
}