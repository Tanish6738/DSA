/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count += 4;

        // Check down
        if (i + 1 < grid.length && grid[i + 1][j] === 1) {
          count -= 2;
        }

        // Check right
        if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
          count -= 2;
        }
      }
    }
  }
  return count;
};

let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(grid));
