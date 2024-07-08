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
var rotateRight = function(head, k) {
  if (!head || k === 0) return head; // Edge case: empty list or no rotation needed
    
    let length = 1;
    let tail = head;
    
    // Calculate the length of the list and find the tail node
    while (tail.next !== null) {
        length++;
        tail = tail.next;
    }
    
    // Adjust k to be within the range of list length
    k = k % length;
    if (k === 0) return head; // No need to rotate if k is 0
    
    // Find the new tail node and break the list at the appropriate position
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    
    let newHead = newTail.next;
    newTail.next = null; // Break the list at the newTail
    
    // Connect the original tail to the original head to form a cycle
    tail.next = head;
    
    return newHead;
};