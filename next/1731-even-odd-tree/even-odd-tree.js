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
var isEvenOddTree = function(root) {
 if (!root) return true;
    
    let queue = [root];
    let level = 0;
    
    while (queue.length) {
        let { length } = queue;
        let prev = null;
        
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            
            if ((level % 2 === 0 && (node.val % 2 === 0 || (prev !== null && node.val <= prev))) ||
                (level % 2 !== 0 && (node.val % 2 !== 0 || (prev !== null && node.val >= prev)))) {
                return false;
            }

            // Update the previous value for the next iteration
            prev = node.val;

            // Enqueue child nodes
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        // Update level for the next iteration
        level++;
    }
    
    return true;
};