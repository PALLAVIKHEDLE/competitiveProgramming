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
var sumOfLeftLeaves = function(root) {
    //recursion approach
//     let sum=0
//     if(!root)return 0
//     // If the left child is a leaf node, add its value to the sum
//     if (root.left && !root.left.left && !root.left.right)sum += root.left.val;  
//     sum += sumOfLeftLeaves(root.left);
//     sum += sumOfLeftLeaves(root.right);

//   return sum  


  //BFS Approach
let queue=[root], sum=0
while(queue.length){
    let len=queue.length
    while(len--){
    let node=queue.shift()
        if (node.left) {
        // If the left child is a leaf node, add its value to the sum
            if (!node.left.left && !node.left.right)sum += node.left.val;
        // Add the left child to the queue for further processing
            queue.push(node.left);
        }
        if(node.right)queue.push(node.right)
    }
}
return sum
};