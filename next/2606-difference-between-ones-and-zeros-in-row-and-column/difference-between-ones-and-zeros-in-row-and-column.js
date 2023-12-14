/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Initialize difference matrix with zeros
    const diff = Array.from({ length: m }, () => Array(n).fill(0));

    // Calculate ones and zeros for each row and column
    const onesRow = Array(m).fill(0);
    const zerosRow = Array(m).fill(0);
    const onesCol = Array(n).fill(0);
    const zerosCol = Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                onesRow[i]++;
                onesCol[j]++;
            } else {
                zerosRow[i]++;
                zerosCol[j]++;
            }
        }
    }

    // Populate the difference matrix based on the formula
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return diff;
};