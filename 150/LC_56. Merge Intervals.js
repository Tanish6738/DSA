var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];

        // Overlap condition
        if (current[1] >= next[0]) {
            // Merge
            current[1] = Math.max(current[1], next[1]);
        } else {
            // Push the current merged interval
            result.push(current);
            current = next;
        }
    }

    // Push the last group
    result.push(current);

    return result;
};

let intervals = [[1,3],[2,6],[15,18],[8,10]];
console.log(merge(intervals));