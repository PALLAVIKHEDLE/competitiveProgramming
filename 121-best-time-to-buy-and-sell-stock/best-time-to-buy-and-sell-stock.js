/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=0, minPrice=prices[0]
    for(let i=1; i<prices.length;i++){
        let sellPrice=prices[i]
        let profit=sellPrice-minPrice
        maxProfit=Math.max(profit, maxProfit)
        if(sellPrice<minPrice)minPrice=sellPrice
    }
return maxProfit
};