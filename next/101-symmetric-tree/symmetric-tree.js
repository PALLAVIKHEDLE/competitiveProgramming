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
var isSymmetric = function(root) {
   if(!root) return true
   return isMirror(root.left, root.right)
};

function isMirror(left, right){
    if(!left&&!right)return true // If both sub trees are empty
    if(!left||!right)return false// If only one of the sub trees are empty
    if(left.val!==right.val)return false// If the values dont match up

 // Check both subtrees but travelled in a mirrored/symmetric fashion (one goes left, other goes right)  and make sure they're both symmetric
   return isMirror(left.left, right.right) && isMirror(left.right, right.left)
}




// function isMirror(left, right){
//    if(!left && !right) return true// If both sub trees are empty
//    if(!left|| !right) return false // If only one of the sub trees are empty
//    if(left.val!==right.val) return false// If the values dont match up

// // Check both subtrees but travelled in a mirrored/symmetric fashion (one goes left, other goes right)  and make sure they're both symmetric
//    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
// }
//  

