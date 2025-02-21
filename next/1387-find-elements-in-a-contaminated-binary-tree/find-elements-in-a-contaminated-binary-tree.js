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
 */
var FindElements = function (root) {

    this.indices = new Set();   // Using this extra space for faster lookup : O(1)

    this.root = this.recover(root, 0);
};

FindElements.prototype.recover = function (root, index) {

    // Base case: Don't proceed if the root is null
    if (!root) {
        return null;
    }

    this.indices.add(index);
    root.val = index;   // [optional] Update the values of tree
    this.recover(root.left, (2 * index) + 1);
    this.recover(root.right, (2 * index) + 2);
    return root;
}

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    
    return this.indices.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */