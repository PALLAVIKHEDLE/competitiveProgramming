/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m=matrix.length, n=matrix[0].length, left=0, right=m*n-1
    while(left<=right){
        let mid =Math.floor((left+right)/2)
        let mid_val=matrix[Math.floor(mid/n)][mid%n]
        if(mid_val==target)return true
        else if(mid_val>target)right=mid-1
        else left=mid+1
    }
return false
};
