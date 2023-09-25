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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
//Inorder Traversal of BST Traversal the number in ascending order
// Get the kth element in the inOrder traversal
    
let res=[]
inOrder(root, res)
return res[k-1]
    
};
function inOrder(root, res){
    if(!root) return null
    inOrder(root.left, res)
    res.push(root.val)
    inOrder(root.right,res)
    
}