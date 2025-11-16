/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>{
        return a[1] - b[1];
    });

    let arrows = 0;
    let burst_point = points[0][1];

    for(let i = 1 ; i < points.length;i++){
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];
        }
    }
    return arrows;
};

let points = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points));