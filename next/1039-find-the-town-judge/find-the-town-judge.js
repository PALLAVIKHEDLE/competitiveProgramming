/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
     const inDegree = new Array(n + 1).fill(0);//the person who trusts
    const outDegree = new Array(n + 1).fill(0);//the person being trusted
    for (let a of trust) {
        outDegree[a[0]]++;
        inDegree[a[1]]++;
    }
    for (let i = 1; i <= n; ++i) {
        if (inDegree[i] === n - 1 && outDegree[i] === 0)
            return i;
    }
    return -1;
};