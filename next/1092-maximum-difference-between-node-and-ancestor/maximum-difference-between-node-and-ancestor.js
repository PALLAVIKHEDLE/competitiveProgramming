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
var maxAncestorDiff = function(root) {
    function findMax(node, max, min){
        if(!node) return max-min

        max=Math.max(node.val, max)
        min=Math.min(node.val, min)

        let left=findMax(node.left, max, min)
        let right=findMax(node.right, max, min)

        return Math.max(left, right)
    }
    return findMax(root, -Infinity, Infinity)
};