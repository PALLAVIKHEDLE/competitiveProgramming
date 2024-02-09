/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0
    for(let i=1; i<prices.length;i++){
        let prev=prices[i-1], curr=prices[i];
        if(prev<curr) profit+=curr-prev
    }
return profit    
};