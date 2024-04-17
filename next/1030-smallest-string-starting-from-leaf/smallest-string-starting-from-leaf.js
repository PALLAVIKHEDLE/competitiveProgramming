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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
     if (!root) return '';

    let queue = [[root, String.fromCharCode(97 + root.val)]]; // Start queue with root and its character
    let smallestString = '';

    while (queue.length) {
        let [node, path] = queue.shift();

        if (!node.left && !node.right) { // Leaf node found
            // Construct the string from leaf to root
            let currentString = path.split('').reverse().join('');
            
            // Compare with smallest found string
            if (smallestString === '' || currentString < smallestString) smallestString = currentString;
        }

        // Traverse to children nodes
        if (node.left) queue.push([node.left, path + String.fromCharCode(97 + node.left.val)]);
        if (node.right) queue.push([node.right, path + String.fromCharCode(97 + node.right.val)]);
        
    }

    return smallestString;
};