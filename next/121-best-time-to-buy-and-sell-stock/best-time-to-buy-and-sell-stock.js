/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sellPrice=prices[0], maxProfit=Number.MIN_SAFE_INTEGER

    for(let i=1; i<prices.length;i++){
        if(sellPrice>prices[i])sellPrice=prices[i]
        let profit=prices[i]-sellPrice
        maxProfit=Math.max(maxProfit,profit)
    }
return maxProfit==Number.MIN_SAFE_INTEGER?0:maxProfit    
};