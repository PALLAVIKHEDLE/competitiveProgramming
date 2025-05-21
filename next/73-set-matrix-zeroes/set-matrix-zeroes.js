/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
 let rows=matrix.length, cols=matrix[0].length,
     zeroRows=[],zeroCols=[];

     for(let i=0;i<rows;i++){
         for(let j=0;j<cols;j++){
              //identify the rows and column containing zeros
             if(matrix[i][j]==0){
               zeroRows.push(i)  
               zeroCols.push(j)  
             }
         }
     }

     //set Entire rows to zero
     zeroRows.forEach((row)=>{
         for(let j=0;j<cols;j++){
             matrix[row][j]=0
         }
     })

     //set entire col to zero
     zeroCols.forEach((col)=>{
         for(let j=0;j<rows;j++){
             matrix[j][col]=0
         }
     })
};