/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var modifiedList = function(nums, head) {
    let set = new Set(nums);
    let stack = [];
    let current = head;

    while (current !== null) {
        if (!set.has(current.val)) {
            stack.push(current);
        }
        current = current.next;
    }

    let newHead = null;
    while (stack.length > 0) {
        let node = stack.pop();
        node.next = newHead;
        newHead = node;
    }

    return newHead;
};