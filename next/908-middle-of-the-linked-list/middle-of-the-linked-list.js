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
var middleNode = function(head) {
 //Fast & Slow Pointer => Fast runner moves two steps forward while the slow one moves one steps only.
     let fast=slow=head;
     while(fast && fast.next){
         fast=fast.next.next
         slow=slow.next
     }
return slow
};