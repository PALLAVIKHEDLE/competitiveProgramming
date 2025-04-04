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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    let maxDepth = -1;
    let lca = null;
    dfs(root, 0);
    return lca;
    // T.C: O(N)
    // S.C: O(H)
    function dfs(root, depth) {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            if (depth > maxDepth) {
                maxDepth = depth;
                lca = root;
            }
            return depth;
        }
        let leftDepth = dfs(root.left, depth + 1);
        let rightDepth = dfs(root.right, depth + 1);
        if (leftDepth === maxDepth && leftDepth === rightDepth) {
            lca = root;
        }
        return Math.max(leftDepth ? leftDepth : -1, rightDepth ? rightDepth : -1);
    }
};