function Maze(m, n, i, j, count) {
  if (i == m - 1 && j == n - 1) {
    return 1;
  }

  if (i < m && j < n) {
    let left = Maze(m, n, i + 1, j);
    let right = Maze(m, n, i, j + 1);
    return left + right;
  }
  if (i < m && j == n) {
    return Maze(m, n, i + 1, j);
  }
  if (i == m && j < n) {
    return Maze(m, n, i, j + 1);
  }

  return 0;
}
function MazePaths(m, n, i, j, arr, path) {
  if (i >= m || j >= n) return;
  path.push([i, j]);
  if (i === m - 1 && j === n - 1) {
    arr.push(path.map((p) => p));
    path.pop();
    return;
  }
  MazePaths(m, n, i + 1, j, arr, path);
  MazePaths(m, n, i, j + 1, arr, path);
  path.pop();
}

function MazeDiagonal(m, n, i, j, arr) {
  if (i === m - 1 && j === n - 1) {
    return 1;
  }
  if (i < m && j < n) {
    let left = MazeDiagonal(m, n, i + 1, j,arr);
    let right = MazeDiagonal(m, n, i, j + 1,arr);
    let center = MazeDiagonal(m , n , i + 1 , j + 1,arr);
    return left + right + center;
  }
  if (i < m && j == n) {
    return MazeDiagonal(m, n, i + 1, j);
  }
  if (i == m && j < n) {
    return MazeDiagonal(m, n, i, j + 1);
  }

  return 0;
}
let arr = []
console.log(MazeDiagonal(3,3,0,0,arr));
