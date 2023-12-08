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
    //FIRST(PRE_ORDER)
     if (!root) return '';
    let left = tree2str(root.left);
    let right = tree2str(root.right);
    if (!left && !right) return root.val.toString();
    if (!right) return `${root.val}(${left})`;
    return `${root.val}(${left})(${right})`;


    //SECOND APPROACH
    // if(!root) return ''
    // let left=tree2str(root.left)
    // let right=tree2str(root.right)
    // if(right) return `${root.val}(${left})(${right})`
    // else if(left) return `${root.val}(${left})`
    // else return `${root.val}`   
};