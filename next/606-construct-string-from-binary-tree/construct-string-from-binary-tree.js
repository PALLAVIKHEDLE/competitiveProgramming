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
 * @return {string}
 */
var tree2str = function(root) {
      function preOrder(node){
          if(!node)return ''
          let result=`${node.val}`
          let left=preOrder(node.left)
          let right=preOrder(node.right)

          if(node.right)result+=`(${left})(${right})`
          else if(node.left)result+=`(${left})`
    return result
      }
return preOrder(root)
};