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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return []
    let queue=[root], result=[], i=0
    while(queue.length){
        let len=queue.length

        while(len--){
            let node=queue.shift()
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
            if (len === 0)result.push(node.val);
            
        }
    }
return result   
};