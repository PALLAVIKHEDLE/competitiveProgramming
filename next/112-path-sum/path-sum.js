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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root)return false;
    const dfs=(node, currentSum)=>{
        //if node is leaf node 
        if(!node.left && !node.right) return currentSum+node.val===targetSum
        let found=false
        if(node.left) found=dfs(node.left, currentSum+node.val)
        if(node.right && !found) found=dfs(node.right, currentSum+node.val)

       return found
    }

  return  dfs(root,0)
};