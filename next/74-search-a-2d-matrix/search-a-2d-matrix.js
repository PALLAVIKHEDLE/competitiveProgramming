/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
//Bruteforce    
    //     let i=0
    //     while(i<matrix.length){
    //         for(let j=0; j<matrix[i].length; j++){
    //             if(matrix[i][j]==target) return true    
    //         }
    //     i++
    //     }
    // return false  

//Binary search
let m= matrix.length, n=matrix[0].length,left=0, right=m*n-1
    console.log('index',left, right)

while(left<=right){
    let mid=Math.floor((left+right)/2)
    //Matrix is n*m or m*n 
    //Math.floor(mid / n) calculates the row, and mid % n calculates the column
    //mid row & mid column and check target element 
    let mid_val = matrix[Math.floor(mid / n)][mid % n];
    if(mid_val==target) return true
    else if(mid_val>target) right=mid-1
    else left=mid+1
}
return false
};