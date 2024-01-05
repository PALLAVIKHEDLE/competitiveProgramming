/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice=prices[0], maxProfit = 0
    for (let i = 1;i<prices.length;i++){
       let profit=prices[i]-minPrice
        maxProfit=Math.max(profit,maxProfit)
    if(minPrice>prices[i])minPrice=prices[i]
    }
 return maxProfit   
};