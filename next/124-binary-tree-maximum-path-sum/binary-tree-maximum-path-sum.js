/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    max=Number.MIN_SAFE_INTEGER
    findSum(root)
    return max
};
function findSum(root){
    if(!root)return 0
    let left=findSum(root.left),
        right=findSum(root.right),
        allSum=left+right+root.val,
        leftNodeSum=left+root.val,
        rightNodeSum=right+root.val
   max=Math.max(max, root.val, allSum, leftNodeSum,rightNodeSum)  
   return Math.max(root.val, leftNodeSum, rightNodeSum)   
}