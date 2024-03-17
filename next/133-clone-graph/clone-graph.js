/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
     if (!node) return node;

    const map = {}; // map is the original node reference to our node

    const clone = root => {
        if (map[root.val] === undefined) {
            map[root.val] = new Node(root.val);
            map[root.val].neighbors = root.neighbors.map(clone);
        }
        return map[root.val];
    };

    return clone(node);
};

