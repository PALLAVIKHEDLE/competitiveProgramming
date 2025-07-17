/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
   const dp = Array.from({ length: k }, () => new Array(k).fill(0));
    let res = 0;
    for (let num of nums) {
        let mod = num % k;
        for (let prev = 0; prev < k; prev++) {
            dp[mod][prev] = dp[prev][mod] + 1; 
            res = Math.max(res, dp[mod][prev]);
        }
    }
    return res; 
};