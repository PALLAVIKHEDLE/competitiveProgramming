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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map={}, result=[]
    function traverse(node){
        if(!node)return 'null'
        let left=traverse(node.left)
        let right=traverse(node.right)

//It creates a unique key for the current subtree
        // let key=`${node.val}-${left}-${right}`;
        const key = "(" + left + node.val + right + ")"

        map[key]=(map[key]||0)+1
        if(map[key]==2)result.push(node)
        return key
    }
    traverse(root)
    return result
};
