/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2 ) return 0;

    let min = prices[0];
    let maxP= 0;

    for(let i = 1 ;i <prices.length ; i++){
        maxP = Math.max(maxP, prices[i] - min);
        min = Math.min(min , prices[i]);
    }
    return maxP
};

let prices = [7,1,5,3,6,4]
maxProfit(prices);