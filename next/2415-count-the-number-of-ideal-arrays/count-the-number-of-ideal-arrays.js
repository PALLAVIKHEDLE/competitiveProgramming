/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, mx) {
    const mod = 1e9 + 7;
    let dp = Array.from({ length: 15 }, () => Array(10001).fill(0));
    let pr = Array.from({ length: 15 }, () => Array(10001).fill(0));
    let tot = Array(15).fill(0);

    for (let i = 1; i <= 10000; i++) {
        dp[1][i] = 1;
        pr[1][i] = i;
    }

    for (let i = 2; i < 15; i++) {
        for (let j = i; j <= 10000; j++) {
            dp[i][j] = pr[i - 1][j - 1];
            pr[i][j] = (dp[i][j] + pr[i][j - 1]) % mod;
        }
    }

    function get(la, cn) {
        tot[cn]++;
        for (let p = 2 * la; p <= mx; p += la)
            get(p, cn + 1);
    }

    for (let i = 1; i <= mx; i++) get(i, 1);

    let ans = mx;
    for (let i = 2; i < 15; i++) {
        ans = (ans + tot[i] * dp[i][n]) % mod;
    }

    return ans;
};