/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rows=matrix.length, cols=matrix[0].length;
  let zeroRows=[],zeroCols=[]
  for(let i=0; i<rows;i++){
      for(let j=0;j<cols;j++){
              //identify the rows and column containing zeros
          if(matrix[i][j]==0){
            zeroRows.push(i)
            zeroCols.push(j)
          }
      }
  }
      // Set entire rows to 0
  zeroRows.forEach(row=>{
         for (let j = 0; j < cols; j++)matrix[row][j] = 0; 
  })
   // Set entire columns to 0
   zeroCols.forEach((col)=>{
        for (let i = 0; i < rows; i++)matrix[i][col] = 0;
  })
};