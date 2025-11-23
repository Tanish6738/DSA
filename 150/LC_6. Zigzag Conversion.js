/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let j = 0,
    k = 0;
  let newArr = [];
  for (let i = 0; i < numRows; i++) {
    newArr[i] = [];
  }

  while (k < s.length) {
    for (let i = 0; i < numRows && k < s.length; i++) {
      newArr[i][j] = s.charAt(k++);
    }
    for (let i = numRows - 2; i > 0 && k < s.length; i--) {
      newArr[i][++j] = s.charAt(k++);
    }
    j++;
  }
  let ans = arrToString(newArr);
  return ans;
};

function arrToString(arr) {
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      ans += arr[i][j] === undefined ? "" : arr[i][j];
    }
  }
  return ans;
}

let s = "tanishq",
  numRows = 3;
console.log(convert(s, numRows));
