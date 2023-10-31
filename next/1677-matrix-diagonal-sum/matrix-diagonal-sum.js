/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let row=mat.length-1, sum=0
    //O(n^2)
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < mat[i].length; j++) {
//             // Add the diagonal elements
//             if (i === j || i + j === row - 1) sum = sum + mat[i][j];     
//         }
//     }
//  return sum   
        for (let i = 0; i <=row; i++) {
            //Main diagonal
            sum = sum + mat[i][i];
            if (i !== (row - i)) sum = sum + mat[i][row-i];     
        }
        return sum   
};