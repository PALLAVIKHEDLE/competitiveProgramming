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
var longestZigZag = function(root) {
  let max=0

  const dfs=(node, prev, length)=>{
      if(!node)return
      max=Math.max(max,length)

      dfs(node.left,'left', prev==='right'?length+1:1)
      dfs(node.right,'right', prev==='left'?length+1:1)

  }
  dfs(root, 'left',0)  
  dfs(root, 'right',0)  
return max
};