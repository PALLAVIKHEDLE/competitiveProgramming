/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    //flip equivalence means that we can flip (mirror) one subtree to obtain the other. 
    if(!root1&& !root2) return true
    if(!root1 ||!root2) return false
    if(root1.val!==root2.val) return false

    let regular=flipEquiv(root1.left, root2.left)&&flipEquiv(root1.right, root2.right)
    let flipped=flipEquiv(root1.left, root2.right)&&flipEquiv(root1.right, root2.left)

return regular||flipped
};