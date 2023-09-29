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
var findBottomLeftValue = function(root) {
//BFS
    let queue=[root],res=[]
    while(queue.length){
        let len=queue.length
        res=[]
        for(let i=0;i<len;i++){
            let node=queue.shift()
            res.push(node.val)
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
        }
    }

    return res[0]
}