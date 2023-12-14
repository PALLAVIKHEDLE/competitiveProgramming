/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let rows=grid.length, col=grid[0].length

    // Initialize difference matrix with zeros
    let  diff=Array.from({length:rows},()=>Array(col).fill(0))

     //Calculate ones and zeros for each row and columm
     let zeroCol=Array(col).fill(0)
         zeroRow=Array(rows).fill(0)
         onesRow=Array(rows).fill(0)
         onesCol=Array(col).fill(0)
         
    for(let i=0;i<rows;i++){
        for(let j=0; j<col;j++){
             if (grid[i][j] == 0) {
                zeroRow[i]++;  // Increment zeroRow for each zero in the row
                zeroCol[j]++;  // Increment zeroCol for each zero in the column
            } else {
                onesRow[i]++;  // Increment onesRow for each one in the row
                onesCol[j]++;  // Increment onesCol for each one in the column
            }
        }
    }

    // Populate the difference matrix based on the formula
    for(let i=0;i<rows;i++){
        for(let j=0; j<col;j++){
            diff[i][j]=onesRow[i] + onesCol[j] - zeroRow[i]- zeroCol[j]
        }
    }        
return diff    
};