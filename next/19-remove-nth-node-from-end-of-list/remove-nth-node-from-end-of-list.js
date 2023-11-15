/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast=slow=head//Initialize fast and slow pointers to the head of the linked list
    for(let i=0; i<n; i++) fast=fast.next//move the first pointer upto n

    if(!fast) return head.next
    // Move both pointers until fast reaches the end of the linked list
    while(fast.next){
        fast=fast.next
        slow=slow.next
    }
    slow.next=slow.next.next  // Remove the nth node from the end

return head    
};