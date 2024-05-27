/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    const dp = new Array(n+1).fill().map(() => new Array(2).fill().map(() => new Array(3).fill(-1)));
    const mod = 1e9 + 7;

function solve(i, a, l) {
    if (a === 2 || l === 3) return 0;
    if (i === n) return 1;
    if (dp[i][a][l] !== -1) return dp[i][a][l];
    
    let ans = 0;
    ans = (ans + solve(i + 1, a, 0) % mod) % mod; // present
    ans = (ans + solve(i + 1, a + 1, 0) % mod) % mod; // absent
    ans = (ans + solve(i + 1, a, l + 1) % mod) % mod; // late
    
    return dp[i][a][l] = ans;
}
    return solve(0, 0, 0);
};