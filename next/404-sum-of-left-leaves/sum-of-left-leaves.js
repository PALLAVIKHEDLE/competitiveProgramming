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
var sumOfLeftLeaves = function(root) {
    let sum=0
    if(!root)return 0
    if (root.left && !root.left.left && !root.left.right) {
        // If the left child is a leaf node, add its value to the sum
        sum += root.left.val;
    }
  sum += sumOfLeftLeaves(root.left);
  sum += sumOfLeftLeaves(root.right);

  return sum  
};