/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let {length}=matrix
   //Transpose a matrix means swapping the rows with columns
   for(let i=0; i<length; i++){
        for(let j=i; j<matrix[0].length;j++){
            [matrix[i][j], matrix[j][i]]=[matrix[j][i], matrix[i][j]]
        }
   }

   // Reverse Each row
   for(let i=0; i<length;i++)matrix[i].reverse()
}