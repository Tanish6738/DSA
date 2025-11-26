var minSubArrayLen = function(target, nums) {
    let i = 0, sum = 0;
    let min = Infinity;

    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];

        while (sum >= target) {
            min = Math.min(min, j - i + 1);
            sum -= nums[i];
            i++;
        }
    }

    return min === Infinity ? 0 : min;
};


let target = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target,nums));