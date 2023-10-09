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

 //Max at root is either the sum of max left subtree and max right subtree, or the sum of the root with max of left subtree children and max of right subtree children. 
var rob = function(root) {
    return recursRob (root)[0]
};
function recursRob(root){
    if(!root) return [0,0]// return the max amount of money that can be robbed considering the current node, and the maximum amount of money that can be robbed without considering the current node.
    const left=recursRob(root.left)
    const right=recursRob(root.right)
    const currMax=Math.max(left[0]+right[0], root.val+left[1]+right[1])
    const childrenMax=left[0]+right[0]
    return [currMax,childrenMax]

}