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
const widthOfBinaryTree = (root) => {
    let stack = [{node: root, index: 1}]
    let maxWidth = 1
    
    while (stack.length > 0) {
        maxWidth = Math.max(maxWidth, (stack[stack.length-1].index - stack[0].index) + 1)
        for (let i=stack.length-1; i>=0; i--) {
            let {node, index} = stack.shift()
            
            if (node.left) stack.push({node: node.left, index: index * 2})
            if (node.right) stack.push({node: node.right, index: (index * 2) + 1})
        }
        
        if (stack.length === 1) stack[0].index = 1
    }
    
    return maxWidth
};