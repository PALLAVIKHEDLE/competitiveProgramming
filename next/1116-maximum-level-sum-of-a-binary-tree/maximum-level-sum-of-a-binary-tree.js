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
var maxLevelSum = function(root) {
    if(!root) return 0
    let level=0, queue=[root], res={level:1, sum:root.val}

    while(queue.length){
        level++
        let newSum=0, len=queue.length
        while(len--){
            let node=queue.shift()
            newSum+=node.val
            if(node.right)queue.push(node.right)
            if(node.left)queue.push(node.left)
        }
        if(newSum>res.sum)res={level,sum:newSum}
    }
   return res.level 
};