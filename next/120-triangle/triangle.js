/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    //starting from the bottom and move to the top
   for(let i=triangle.length-1; i>=0;i--){
       let row=triangle[i]
       for(let j=0; j<row.length-1; j++){
           triangle[i-1][j]+=Math.min(row[j],row[j+1])
       }
   }
   return triangle[0]
    
};