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
var maxDepth = function(root) {
//DFS
//   if(!root) return 0
//   let count1=maxDepth(root.left)
//   let count2=maxDepth(root.right)
//   return Math.max(count1, count2)+1

  //BFS
    if(!root) return 0;
    let queue=[root]
    let level=0
    while(queue.length){
        let length=queue.length
        level++
        while(length--){
            let node=queue.shift()
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
        }
    }
return level
}