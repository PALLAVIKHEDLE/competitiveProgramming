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
    //DFS recursive approach
//     let res=[]
//     const rightView=(root, level)=>{
//         if(!root) return []
//         if(!res[level])res.push(root.val)
//         rightView(root.right, level+1)
//         rightView(root.left, level+1)
//     }
//     rightView(root,0)
// return res

    //BFS recursive approach
    if(!root)return []
    let queue=[root], result=[]
    while(queue.length){
        let {length}=queue
        for(let i=0; i<length;i++){//The for loop iterates over the nodes at the current level
            let node=queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right)queue.push(node.right)
            //if it is the last node of the level then add to result
            if(i==length-1) result.push(node.val)
        }
    }
return result
};