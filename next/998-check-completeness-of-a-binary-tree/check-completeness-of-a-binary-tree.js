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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let seenNull=false, queue=[root]
    while(queue.length){
        const result=[]
         for(let nextNode of queue){
             if(!nextNode) seenNull =true
             else{
                 if(seenNull)return false
                 result.push(nextNode.left,nextNode.right)
             }
         }
         queue=result
    }
return true    
};