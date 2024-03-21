/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
   const dfs=(node)=>{
        if(!node)return null
        if(node==p || node ==q) return node
        const left= dfs(node.left)
        const right= dfs(node.right)

        if(!left) return right
        if(!right) return left
        return node

   }
    return dfs(root)

      // if(!root|| root==p|| root==q)return root
    // let left=lowestCommonAncestor(root.left,p,q)
    // let right=lowestCommonAncestor(root.right,p,q)

    // if (!left) return right  // p and q are in the right subtree
    // if (!right) return left  // p and q are in the left subtree
    // return root              // p is in one side and q is in the other
};