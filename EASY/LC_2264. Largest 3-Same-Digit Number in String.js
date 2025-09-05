/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let best = "";
    for (let i = 0; i <= num.length - 3; i++) {
        const a = num[i];
        if (a === num[i + 1] && a === num[i + 2]) {
            const cand = a + a + a; 
            if (best === "" || cand > best) best = cand;
        }
    }
    return best;
};
