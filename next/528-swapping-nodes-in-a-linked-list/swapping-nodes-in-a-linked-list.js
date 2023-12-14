/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
   let fast=slow=temp=head;

    // Move fast pointer till k nodes
    for (let i = 1; i < k; i++){
         fast = fast.next;
         temp = temp.next;
    }
    // Move both pointers until fast reaches the end
    while (temp.next) {
        slow = slow.next;
        temp=temp.next
    }

   // swap values
  [fast.val, slow.val] = [slow.val, fast.val]

return head;  
};