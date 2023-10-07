/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if(n%2==0) return []// // If number is even, can not construct a perfect binary tree so return blank tree
    if(n===1) return [new TreeNode(0)]
    const result=[]

    for(let i=1;i<n;i+=2){
        //generate the left & right subtrees
        const leftTree=allPossibleFBT(i)
        const rightTree=allPossibleFBT(n-1-i)
        // Combine left and right subtrees to create full binary trees
        for(leftNode of leftTree){
            for(rightNode of rightTree){
                const root = new TreeNode(0)
                root.left=leftNode
                root.right=rightNode
                result.push(root);

            }
        }
    }

return result
}; 


