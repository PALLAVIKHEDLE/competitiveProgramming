/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let maxProfit=Number.MIN_SAFE_INTEGER, sellPrice=prices[0];
for(let i=1; i<prices.length;i++){
    if(sellPrice>prices[i])sellPrice=prices[i]
    let profit=Math.abs(sellPrice-prices[i])
    maxProfit=Math.max(profit,maxProfit)
}
return maxProfit==Number.MIN_SAFE_INTEGER?0:maxProfit
}