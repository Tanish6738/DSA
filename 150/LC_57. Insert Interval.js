var insert = function(intervals, newInterval) {
    if (intervals.length == 0 && newInterval) return [newInterval]
    if (intervals.length <= 1) return intervals;
    
    intervals.push(newInterval);
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

let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];
console.log(insert(intervals,newInterval));