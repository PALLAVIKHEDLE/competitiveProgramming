/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let row=mat.length, sum=0
   
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            // Add the diagonal elements
            if (i === j || i + j === row - 1) {
                sum = sum + mat[i][j];
            }
        }
    }
 return sum   
};