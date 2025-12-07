function Maze(p, arr, i, j) {
  let row = arr.length - 1;
  let col = arr[0].length - 1;

  if (i == row && j == col) {
    console.log(p);
    return;
  }

  if (arr[i][j] == false) return;
  arr[i][j] = false;
  if (i < row) {
    Maze(p + "D", arr, i + 1, j);
  }
  if (j < col) {
    Maze(p + "R", arr, i, j + 1);
  }
  if (i > 0) {
    Maze(p + "U", arr, i - 1, j);
  }
  if (j > 0) {
    Maze(p + "L", arr, i, j - 1);
  }
    arr[i][j] = true;
}

let arr = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];
Maze("", arr, 0, 0);
