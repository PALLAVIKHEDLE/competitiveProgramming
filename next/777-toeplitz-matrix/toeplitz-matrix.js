/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) { 
    for(let i=1; i<matrix.length; i++){
        for(let j=1; j<matrix[i].length;j++){
            //current element (matrix[i][j]) is not equal to the one diagonally above and to the left (matrix[i-1][j-1]).
            if(matrix[i][j]!==matrix[i-1][j-1]) return false
        }
    }
return true
};