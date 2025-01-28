/**
 * @param {number[][]} grid
 * @return {number}
 */
const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var findMaxFish = function(grid) {
    const f = (i, j, v = grid[i]?.[j]) => 
        v ? (grid[i][j] = 0, deltas.reduce((s, [x, y]) => s + f(i + x, j + y), v)) : 0;
    return Math.max(...grid.map((row, i) => row.map((c, j) => c && f(i, j))).flat());
};