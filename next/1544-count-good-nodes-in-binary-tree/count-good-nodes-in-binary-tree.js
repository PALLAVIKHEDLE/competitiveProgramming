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
 let count=0
var goodNodes = function(root) {
    count = 0;
    dfs(root, root.val);
    return count;
}
 function dfs(node, maxSoFar) {
        if (!node) return;
        if (node.val >= maxSoFar) {
            count++;
            maxSoFar = node.val;
        }
        dfs(node.left, maxSoFar);
        dfs(node.right, maxSoFar);
    }