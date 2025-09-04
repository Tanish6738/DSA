/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map = new Map();
    let ans = [];
    for(let i = 0 ; i < names.length; i++){
        map.set(heights[i], names[i]);
    }

    heights.sort((a,b) => b - a);

    for(let i = 0 ; i < heights.length;i++){
        ans[i] = map.get(heights[i]);
    }

    return ans;
};


/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const people = [];
    for (let i = 0; i < names.length; i++) {
        people.push([names[i], heights[i]]);
    }
    return people.sort((a, b) => b[1] - a[1]).map(a => a[0]);
};



let names = ["Mary","John","Emma"], heights = [180,165,170];
console.log(sortPeople(names,heights));