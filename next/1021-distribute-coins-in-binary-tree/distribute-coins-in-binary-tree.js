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
var distributeCoins = function(root) {
     let moves = 0;

    function dfs(node) {
        if (!node) return 0;
        let leftExcess = dfs(node.left);
        let rightExcess = dfs(node.right);
        moves += Math.abs(leftExcess) + Math.abs(rightExcess);
        return node.val + leftExcess + rightExcess - 1;
    }

    dfs(root);
    return moves;
};