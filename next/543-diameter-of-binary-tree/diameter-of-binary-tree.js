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
var diameterOfBinaryTree = function(root) {
    let max=0
    function maxDepth(root){
        if(!root)return 0// if the root is null
        //Recursive calculate the depth of the left and right subtrees
        let left=maxDepth(root.left)
        let right=maxDepth(root.right)
        //update the global max variable with the maximum depth encountered so far
        max=Math.max(max, left+right)
       return Math.max(left, right)+1
    }
    maxDepth(root)
    return max
    };



    
