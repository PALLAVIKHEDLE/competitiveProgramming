/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n=matrix.length
    //Transpose the matrix
    for(let i=0; i<n;i++){
        for(let j=i; j<matrix[0].length;j++){
           [ matrix[i][j], matrix[j][i]]= [ matrix[j][i], matrix[i][j]]
        }
    }
        //Reverse Each Row
    for(let i=0; i<n;i++)matrix[i].reverse()
}