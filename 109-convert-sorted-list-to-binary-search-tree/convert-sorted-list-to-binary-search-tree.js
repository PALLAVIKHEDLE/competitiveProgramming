/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// var sortedListToBST = function(head) {
//     if(!head )return null
  
//       let fast=slow=head
//     while(fast&&fast.next){
//         fast=fast.next.next
//         slow=slow.next
//     }
   
// console.log('slow',slow)
//       return toBST(head,slow);
//     }
//     function toBST(head,slow){
//         let root = new TreeNode(slow.val);
//         root.left = toBST(head,slow);
//         root.right = toBST(slow.next,head);
//         console.log('mode',root)
//         // return root;
//     }
var sortedListToBST = function(head) {
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val); // Base case for single node

    let slow = head;
    let fast = head;
    let prev = null;

    // Use fast and slow pointers to find the middle of the list
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Disconnect the left half of the list
    if (prev) {
        prev.next = null;
    }

    // Create the root node
    const root = new TreeNode(slow.val);

    // Recursively build the left and right subtrees
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow.next);

    return root;
};
