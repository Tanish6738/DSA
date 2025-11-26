var maxPoints = function(points) {
    if (points.length <= 2) return points.length;

    let maxPointsOnLine = 1;

    for (let i = 0; i < points.length; i++) {
        let slopes = new Map();
        let currMax = 0;

        const [x1, y1] = points[i];

        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j];

            let dx = x2 - x1;
            let dy = y2 - y1;

            const g = gcd(dx, dy);
            dx /= g;
            dy /= g;

            const key = `${dx},${dy}`;
            slopes.set(key, (slopes.get(key) || 0) + 1);
            currMax = Math.max(currMax, slopes.get(key));
        }

        maxPointsOnLine = Math.max(maxPointsOnLine, currMax + 1);
    }

    return maxPointsOnLine;
};

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}


let points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]];
console.log(maxPoints(points));