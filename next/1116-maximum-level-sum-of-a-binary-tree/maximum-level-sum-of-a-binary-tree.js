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
var maxLevelSum = function(root) {
      if (!root) return 0

    let level = 1
    let res = { level: 1, sum: root.val } 

    const queue = [root]

    while (queue.length) {
        const queueLen = queue.length 

        let newSum = 0 

        for (let i = 0; i < queueLen; i++) {
            const node = queue.shift()
            newSum += node.val 
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        if (newSum > res.sum) {
            res = { level, sum: newSum}
        }

        level++
    }

    return res.level
};