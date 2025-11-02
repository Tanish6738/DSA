/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    
    let map = new Map();

    for(let i = 0 ; i < points.length ;i++){
        let dis = distance(points[i]);
        if(map.has(dis)){
            let arr = map.get(dis);
            arr.push(points[i]);
        }else{
            map.set(dis, [points[i]])
        }
    }

    // Sort distances and collect first k points
    let sortedDistances = Array.from(map.keys()).sort((a, b) => a - b);
    let result = [];
    
    for(let dist of sortedDistances) {
        let pointsAtDist = map.get(dist);
        for(let point of pointsAtDist) {
            if(result.length < k) {
                result.push(point);
            } else {
                return result;
            }
        }
    }
    
    return result;
};

var distance =(arr)=>{
    let [x,y] = arr;

    return Math.sqrt((x**2) +( y**2 ));
}

let points = [[3,3],[5,-1],[-2,4]], k = 2;
console.log(kClosest(points,k));
// console.log(distance([3,3]));
