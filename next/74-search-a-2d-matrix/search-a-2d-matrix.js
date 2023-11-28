/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i=0
    while(i<matrix.length){
        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j]==target) return true    
        }
        i++
    }

return false    
};