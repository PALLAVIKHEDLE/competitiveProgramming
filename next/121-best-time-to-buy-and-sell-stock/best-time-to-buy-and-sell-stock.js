/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=Number.MIN_SAFE_INTEGER, sellPrice=prices[0];
    for(let i=1; i<prices.length;i++){
        if(prices[i]<sellPrice)sellPrice=prices[i]
        let profit = Math.abs(sellPrice-prices[i])
        maxProfit=Math.max(maxProfit,profit)
    }
    return maxProfit==Number.MIN_SAFE_INTEGER?0:maxProfit
}