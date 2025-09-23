var peakIndexInMountainArray = function(arr) {
    let l = 0, r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] < arr[mid + 1]) {
            l = mid + 1; // peak is on the right
        } else {
            r = mid;     // peak is on the left (including mid)
        }
    }

    return l; // or r (both meet at peak)
};
let arr=  [0,2,1,0];
console.log(peakIndexInMountainArray(arr));