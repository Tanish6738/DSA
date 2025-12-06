function Bubble(arr, i, lastIndex) {
  if (lastIndex <= 0) return arr;

  if (arr[i] > arr[i + 1]) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }

  if (i == lastIndex) {
    return Bubble(arr, 0, lastIndex - 1);
  }
  return Bubble(arr, i + 1, lastIndex);
}

function Selection(arr, i, lastIndex, max) {
  if (lastIndex <= 0) return arr;

  if (arr[i] > arr[max]) max = i;

  if (i == lastIndex) {
    [arr[lastIndex], arr[max]] = [arr[max], arr[lastIndex]];
    return Selection(arr, 0, lastIndex - 1, 0);
  }

  return Selection(arr, i + 1, lastIndex, max);
}
let arr = [15, 1, 4, 25];
// console.log(Bubble(arr,0 ,arr.length - 1 ));
// console.log(Selection(arr, 1 , arr.length - 1 , 0));

function MergeSort(arr, s, e) {
  if (s >= e - 1) return;
  let mid = Math.floor((s + e) / 2);

  MergeSort(arr, s, mid);
  MergeSort(arr, mid, e);

  Merge(arr, s, mid, e);
}

function Merge(arr, s, mid, e) {
  let temp = new Array(e - s);
  let i = s,
    j = mid,
    k = 0;
  while (i < mid && j < e) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i < mid) temp[k++] = arr[i++];
  while (j < e) temp[k++] = arr[j++];

  for (let l = 0; l < temp.length; l++) {
    arr[s + l] = temp[l];
  }
}

// MergeSort(arr,0,arr.length);

// console.log(arr);

function findSubStrs(s, p, arr) {
  if (s == "") {
    arr.push(p);
    return;
  }

  let char = s.charAt(0);
  findSubStrs(s.slice(1), p + char, arr);
  findSubStrs(s.slice(1), p, arr);
}

// let s = "abc", arr1 = [];
// findSubStrs(s, "",arr1);
// console.log(arr1);

function findPermutations(s, p, arr) {
  if (s == "") {
    if (!arr.includes(p)) arr.push(p);
    return;
  }

  let char = s.charAt(0);
  for (let i = 0; i <= p.length; i++) {
    let first = p.substring(0, i);
    let second = p.substring(i);
    let ans = first + char + second;
    findPermutations(s.slice(1), ans, arr);
  }
}

// let s = "abcd",arr2=[];
// findPermutations(s,"",arr2);
// console.log(arr2);

var letterCombinations = function (digits) {
  if (!digits) return [];

  let arr = [];
  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  solve(digits, "", arr, map);
  return arr;  // ← FIX
};

function solve(digits, p, arr, map) {
  if (digits === "") {
    arr.push(p);
    return;
  }

  let char = digits.charAt(0);
  let ar = map[char];

  for (let i = 0; i < ar.length; i++) {
    solve(digits.slice(1), p + ar[i], arr, map);
  }
}

// let s = "23";
// console.log(letterCombinations(s));

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  


};

console.log(longestPalindrome("babad"));