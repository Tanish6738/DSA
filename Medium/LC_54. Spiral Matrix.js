/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = [];
    let maxRow = matrix.length - 1, minRow = 0, minCol = 0, maxCol = matrix[0].length - 1;

    while(ans.length < matrix.length * matrix[0].length) {
        // left to right
        for(let j = minCol; j <= maxCol; j++){
            ans.push(matrix[minRow][j]);
        }
        minRow++;
        
        // top to bottom 
        for(let i = minRow; i <= maxRow; i++){
            ans.push(matrix[i][maxCol]);
        }
        maxCol--;
        
        // right to left (only if we still have rows)
        if(minRow <= maxRow) {
            for(let j = maxCol; j >= minCol; j--){
                ans.push(matrix[maxRow][j]);
            }
            maxRow--;
        }

        // bottom to top (only if we still have columns)
        if(minCol <= maxCol) {
            for(let i = maxRow; i >= minRow; i--){
                ans.push(matrix[i][minCol]);
            }
            minCol++;
        }
    }
    
    return ans;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));