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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root)return 0
    let count=0

    function pathSum(node, sum){
        if(!node)return
        sum+=node.val
        if(sum===targetSum)count++
        return pathSum(node.left,sum)||pathSum(node.right,sum)
    }
    function dfs(node){
        if(!node)return
        //inOrder
        if(node.left)dfs(node.left)
        pathSum(node,0)
        if(node.right)dfs(node.right)
    }
    dfs(root)
    return count
};