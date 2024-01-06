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
var leafSimilar = function(root1, root2) {
  let res1=[],res2=[]

  function leaf(root, res){
      if(!root)return
      if(!root.left &&!root.right)res.push(root.val)
      if(root.left)leaf(root.left,res)
      if(root.right)leaf(root.right,res)
   return res     
  }


leaf(root1,res1)
leaf(root2,res2)


    return res1.toString() === res2.toString();
};
