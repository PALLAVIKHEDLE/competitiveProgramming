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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    // let result=[], sum=0
    // if(!root)return null
   
    //     const inOrderTraversal = function(node) {
    //     if (node) {
    //         inOrderTraversal(node.left);
    //         result.push(node.val);
    //         inOrderTraversal(node.right);
    //     }
    // };

    // inOrderTraversal(root);
    // for(let i=0; i<result.length;i++){
    //     if(low<=result[i] && result[i]<=high)sum+=result[i]
    // }
    // return sum
     if (!root) return 0
    let sum = 0

    if (low <= root.val && root.val <= high) sum += root.val

    if (root.left) sum += rangeSumBST(root.left, low, high)
    if (root.right) sum += rangeSumBST(root.right, low, high)


    return sum
};