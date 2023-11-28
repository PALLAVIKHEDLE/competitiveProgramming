/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
        console.log('index', i,j)
        console.log('matrix[i][j]',matrix[i][j], target)
        if(matrix[i][j]==target) return true    
        }
    }
return false    
};