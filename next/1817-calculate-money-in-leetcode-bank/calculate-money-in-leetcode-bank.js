/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
 let ans = 0,week = 1,additional = 0;

    for (let i = 1; i <= n; i++) {
        ans += week + additional;
        if (i % 7 === 0) {
            week++;
            additional = 0;
        } else additional++;
    }
return ans; 
};