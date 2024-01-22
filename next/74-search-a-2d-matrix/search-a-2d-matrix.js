/**
 * @param {number[][]} matrix
 * @param {number} targetkya bnau
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row=matrix.length, column=matrix[0].length, left=0, right=row*column-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        let mid_val=matrix[Math.floor(mid/column)][mid%column]
        if(mid_val==target)return true
        else if(mid_val>target)right=mid-1
        else left=mid+1
    }  
return false    
};