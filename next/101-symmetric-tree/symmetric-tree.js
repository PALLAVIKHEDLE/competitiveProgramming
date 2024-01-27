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
    if(!root)return true//empty tree is considered symmetric
   let queue=[root,root]

   while(queue.length){
       let length=queue.length
       while(length--){
           let node1=queue.shift()
           let node2=queue.shift()
           if(!node1&&!node2)continue
             if (!node1 || !node2 || node1.val !== node2.val) {
            // One of the nodes is null (but not both), or their values are different
            // The tree is not symmetric
            return false;
             }
          // Add the left and right children of the current nodes to the queue in a symmetric order
        queue.push(node1.left, node2.right, node1.right, node2.left);
       }
   }
return true
}