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
var maxDepth = function(root) {
    if(!root) return 0
    let count1=maxDepth(root.left)
    let count2= maxDepth(root.right)

    return Math.max(count1, count2)+1

    // return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};



// if(!root) return 0
    //     let count1= maxDepth(root.left)
    //     let count2= maxDepth(root.right)
    //     return Math.max(count1+1, count2+1)

    // if(!root)return 0
    // return Math.max(maxDepth(root.left), maxDepth(root.right))+1