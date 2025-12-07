function Maze(arr, i, j){
    const rows = arr.length;
    const cols = arr[0].length;

    if (i >= rows || j >= cols) return 0;

    if (arr[i][j] === false) return 0;

    if (i === rows - 1 && j === cols - 1) return 1;

    return Maze(arr, i + 1, j) + Maze(arr, i, j + 1);
}

let arr = [
    [true,true,true],
    [false,false,true],
    [true,true,true],
]

console.log(Maze(arr,0,0));