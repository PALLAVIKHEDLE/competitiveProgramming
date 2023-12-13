/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let rows = mat.length,cols = mat[0].length,count = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1 && isSpecialPosition(i, j))count++; 
        }
    }

    function isSpecialPosition(row, col) {
        for (let r = 0; r < rows; r++) {
            if (r !== row && mat[r][col] === 1) return false;  // Another '1' in the same column  
        }

        for (let c = 0; c < cols; c++) {
            if (c !== col && mat[row][c] === 1)return false;  // Another '1' in the same row   
        }
return true;  // No other '1' in the same row or column
}

return count; 
}