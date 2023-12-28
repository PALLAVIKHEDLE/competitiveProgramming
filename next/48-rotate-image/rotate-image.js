/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n=matrix.length
    //Transpose the matrix
    for(let i=0; i<n;i++){
        for(j=i;j<n;j++){
            //swap matrix[i][j] to matirx[j][i]
            let temp=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
        }
    }
//Reverse Each Row
    for(let i=0; i<n;i++)matrix[i].reverse()
    
}