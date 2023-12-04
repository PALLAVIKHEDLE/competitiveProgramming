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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function isSameTree(root,subRoot){
        if(!root && !subRoot) return true
        if(!root || !subRoot|| root.val!==subRoot.val)return false
        return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
    }
    if(!root) return false
    if(!subRoot)return true
    if(isSameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot)||isSubtree(root.right, subRoot)
}; 