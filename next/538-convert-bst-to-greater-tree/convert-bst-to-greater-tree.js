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
 * @return {TreeNode}
 */
 
var convertBST = function(root) {
    let sum=0,prev=0
    function recusrion(root){
        if(root){
            recusrion(root.right)
            sum+=root.val
            root.val+=prev
            prev=sum
            recusrion(root.left)
        }
}
recusrion(root)
return root  
};

