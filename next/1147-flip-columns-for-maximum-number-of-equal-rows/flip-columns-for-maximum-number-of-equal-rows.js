/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (g) {
    const m = g.length

    let o = {}
    for (let i = 0; i < m; i++) {
        if (g[i][0]) {
            g[i] = g[i].map((e) => 1 - e)
        }
        let k = g[i].join("")
        o[k] = (o[k] || 0) + 1
    }

    let maxf = 0
    for (let k in o) {
        let f = o[k]
        maxf = Math.max(maxf, f)
    }
    return maxf
};