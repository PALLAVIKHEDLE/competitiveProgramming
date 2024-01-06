/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let fast=slow=head, prevNode=null
    while(fast&&fast.next){
        prevNode = slow;
        slow=slow.next
        fast=fast.next.next
    }
   if (!prevNode) return null;
    prevNode.next = slow.next;
    return head
};