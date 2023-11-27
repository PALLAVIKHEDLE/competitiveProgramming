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
 * @return {TreeNode}
 */
var invertTree = function(root) {
//RECURSIVE  APPROACH 1st
    // if(root)[root.left, root.right]=[invertTree(root.right),invertTree(root.left)]
    // return root

//2nd Approach 
    // if(!root)return null
    // let leftNode= invertTree(root.left)
    // let rightNode= invertTree(root.right)
    // root.left=rightNode
    // root.right=leftNode
    // return root

//BFS Approach    
    if(!root) return null
    let queue=[root]
    while(queue.length){
        let len=queue.length
        while(len--){
            let current=queue.shift()
            //Swap
            let temp= current.left
            current.left=current.right
            current.right=temp
            
            if(current.left)queue.push(current.left)
            if(current.right)queue.push(current.right)
        }
    }  
 return root    
};