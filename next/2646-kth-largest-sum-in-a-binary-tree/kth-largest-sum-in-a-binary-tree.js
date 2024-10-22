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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
    const config = {};
    var kthLargestLevelSumHelper = function (root, level = 1) {
        if (!root) {
            return;
        }
        const value = root.val || 0;
        if (!config[level]) {
            config[level] = 0;
        }
        const prevSum = config[level];
        const totalSum = prevSum + value;
        config[level] = totalSum;
        kthLargestLevelSumHelper(root.left, level + 1);
        kthLargestLevelSumHelper(root.right, level + 1);
    };
    kthLargestLevelSumHelper(root);
    const sorted = Object.values(config).sort((a, b) => a - b);
    if (sorted[Object.keys(config).length - k] === undefined) {
        return -1
    }
    return sorted[Object.keys(config).length - k] || -1;
};