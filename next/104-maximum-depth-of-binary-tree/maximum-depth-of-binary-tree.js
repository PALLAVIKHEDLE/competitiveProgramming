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
var maxDepth = function(root) {
     // if(!root) return 0
    // let count= maxDepth(root.left)
        // count2= maxDepth(root.right)
    
    // return Math.max(count, count2)+1
   if(!root) return 0
   return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};