/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
//     let n = matrix.length,row=[], result=[] 
//     for (let i = 0; i < n; i++) {
//         for (let j = n - 1; j >= 0; j--) {
//             row.push(matrix[j][i]);
//         }
//     result.push(row);
//     }
// return result

 let n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // Swap matrix[i][j] with matrix[j][i]
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};