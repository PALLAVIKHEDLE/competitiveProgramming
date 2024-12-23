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
var minimumOperations = function(root) {
    const levels = [];
    let swaps = 0;

    function dfs (node, level) {
        if (!node) return;

        if (!levels[level]) levels[level] = [];
        levels[level].push(node.val);

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);

    for (let i = 0; i < levels.length; i++) {
        const source = levels[i];
        const sorted = [...source].sort((a, b) => a - b);
        const indexMap = new Map();

        for (let j = 0; j < sorted.length; j++) {
            indexMap.set(sorted[j], j);
        }

        for (let j = 1; j < source.length; j++) {
            while (source[j] !== sorted[j]) {
                const correctIndex = indexMap.get(source[j]);

                [source[j], source[correctIndex]] = [source[correctIndex], source[j]];
                swaps++;
            }
        }
    }

    return swaps;
};