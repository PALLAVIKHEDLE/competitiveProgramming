/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let row=matrix[0].length, column=matrix.length
    for(let i=1;i<column;i++){
        for(let j=1; j<row;j++){
            if(matrix[i][j]!== matrix[i-1][j-1])return false
        }
    }
 return true   
};