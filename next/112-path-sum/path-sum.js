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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
if(!root) return false//empty tree or root null
if(root.val==targetSum &&!root.left &&!root.right) return true //if there is only a root node 
// Call the same function recursively for left and right subtree...

return  hasPathSum(root.left, targetSum- root.val) || hasPathSum(root.right, targetSum-root.val)
};