/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let Row = 0 , col = 0;
    for(let i = 0 ; i < matrix.length;i++){
        for(let j = 0 ; j < matrix[i].length ; j++){
            if (matrix[i][j] == 0 ){
                matrix[Row][j] = 0;
                matrix[i][col] = 0;
            }
        }
    }

    for(let i = Row + 1; i < matrix.length;i++){
        if (matrix[i][col] == 0){
            for(let j = 0 ; j < matrix[0].length;j++){
                matrix[i][j] = 0
            }
        }
    }
    for(let i = col + 1; i < matrix.length;i++){
        if (matrix[Row][i] == 0){
            for(let j = 0 ; j < matrix[0].length;j++){
                matrix[i][j] = 0
            }
        }
    }

    return matrix;
};

let matrix = [[0,1,2,3,4],[1,6,0,4,0],[2,2,3,0,4],[3,1,2,3,4],[4,0,4,0,1]];
console.log(setZeroes(matrix));