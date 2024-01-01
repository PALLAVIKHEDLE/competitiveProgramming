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
var isValidBST = function(root) {
    return isValidate(root, -Infinity, Infinity )
};
function isValidate(root, left, right){
    if(!root) return true
    if((left<root.val)&& (right>root.val)) return isValidate(root.left, left, root. val)&& isValidate(root.right, root.val, right)
    else return false
}