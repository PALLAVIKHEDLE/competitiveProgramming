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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
 if (depth === 1) {
        // If depth is 1, create a new root with the original tree as its left child
        let newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    
    // Use a queue for level-order traversal
    let queue = [root];
    let currentDepth = 1;
    
    // Traverse the tree until we reach the level just above the target depth
    while (queue.length && currentDepth < depth - 1) {
        let length = queue.length;
        
        // Process all nodes at the current level
        while (length--) {
            let node = queue.shift();
        
            // Add left & right child to queue if it exists
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);    
        }
        
        // Move to the next level
        currentDepth++;
    }
    
    // Now currentDepth should be depth - 1
    // Insert new nodes at the target depth
    while (queue.length ) {
        let node = queue.shift();
        
        // Create new nodes with value val and link them appropriately
        let newLeftNode = new TreeNode(val);
        let newRightNode = new TreeNode(val);
        
        // Preserve existing left and right children of the current node
        newLeftNode.left = node.left;
        newRightNode.right = node.right;
        
        // Set new nodes as left and right children of the current node
        node.left = newLeftNode;
        node.right = newRightNode;
    }
    
    return root;
};