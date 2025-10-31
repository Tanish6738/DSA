var findMaxLength = function(nums) {
  const map = new Map(); // stores first index of each diff
  let maxLen = 0;
  let count1 = 0;
  let count0 = 0;

  map.set(0, -1); // diff = 0 before starting (important!)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count1++;
    else count0++;

    const diff = count1 - count0;

    if (map.has(diff)) {
      // found same diff again → balanced subarray
      const prevIndex = map.get(diff);
      const length = i - prevIndex;
      maxLen = Math.max(maxLen, length);
    } else {
      // store first time we see this diff
      map.set(diff, i);
    }
  }

  return maxLen;
};


let nums = [0,1,1,1,1,1,0,0,0];
console.log(findMaxLength(nums));