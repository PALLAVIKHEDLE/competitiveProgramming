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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root)return []
    let queue=[root], result=[], count=0
    while(queue.length){
        let len=queue.length
        if(count%2==0)result.push(queue.map(node=>node.val))
        else result.push(queue.map(node=>node.val).reverse())

        count++
        while(len--){
            let curr=queue.shift()
            if(curr.left)queue.push(curr.left)
            if(curr.right)queue.push(curr.right)
        }
    }
return result
};