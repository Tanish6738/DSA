/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0, j = height.length - 1;

    while( i < j ){
        let h = Math.min(height[i], height[j]);
        let w = j - i;
        let area = h * w;
        if (area > max) max = area;
        if (height[i] < height[j]){
            i++;
        }else {
            j--;
        }
    }
    return max;
};

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));