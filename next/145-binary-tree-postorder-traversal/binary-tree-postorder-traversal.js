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
var postorderTraversal = function(root) {
    let stack = [];
    if (!root) return []; // Return an empty array if root is null

    const dfs = (node) => {
        if (node === null) return; // Base case: return if node is null

        // Traverse left subtree
        dfs(node.left);

        // Traverse right subtree
        dfs(node.right);

        // After traversing both subtrees, push the node value to stack
        stack.push(node.val);
    };

    // Start the depth-first search (postorder traversal) from the root
    dfs(root);

    return stack;
};
