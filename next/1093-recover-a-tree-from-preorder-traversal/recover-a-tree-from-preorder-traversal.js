/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
const validator = function (str, current) {
    let d = 0;
    let n = '';

    for (let index = current; index < str.length && str[index] === '-'; index++) {
        d++;
    }

    for (let index = current + d; index < str.length && str[index] !== '-'; index++) {
        n += str[index];
    }

    return { d, n }
}

const statusChecker = function (status, node, n) {
    if (status === 'm') {
        node = new TreeNode(n);
    }

    if (status === 'l') {
        node.left = new TreeNode(n);
        node = node.left
    }

    if (status === 'r') {
        node.right = new TreeNode(n);
        node = node.right;
    }

    return node;
}

const constructTree = function (str, node, status, current, depth) {
    let { d, n } = validator(str, current);

    if (depth !== d) {
        return current;
    }

    current += d + n.length;
    n = +n;

    node = statusChecker(status, node, n);
    current = constructTree(str, node, 'l', current, depth + 1);
    current = constructTree(str, node, 'r', current, depth + 1);

    if (depth === 0) {
        return node
    }

    return current;
}

const recoverFromPreorder = function (traversal) {
    const head = constructTree(traversal, null, 'm', 0, 0);

    return head;
};