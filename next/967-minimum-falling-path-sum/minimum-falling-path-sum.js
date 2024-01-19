/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;

    for (let i = 1; i < row; i++) {
        for (let j = 0; j < col; j++) {
            matrix[i][j] += Math.min(
                matrix[i - 1][j],
                (j > 0) ? matrix[i - 1][j - 1] : Infinity,
                (j < col - 1) ? matrix[i - 1][j + 1] : Infinity
            );
        }
    }

    return Math.min(...matrix[row - 1]);
};