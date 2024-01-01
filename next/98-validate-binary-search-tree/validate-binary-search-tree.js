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
 * @return {boolean}
 */
var isValidBST = function(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!root) return true;

    if (root.val <= min || root.val >= max) return false;

    // For the left subtree, update the max constraint to root.val
    // For the right subtree, update the min constraint to root.val
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
