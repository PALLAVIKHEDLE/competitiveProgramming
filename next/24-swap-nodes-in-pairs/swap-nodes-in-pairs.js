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
var swapPairs = function(head) {
     let dummyNode = new ListNode(0, head);
    let current = dummyNode;

   // Iterate through the linked list while there are at least two more nodes
   while ( current.next !== null && current.next.next !== null) {
       let swap1 = current.next;      // First node to be swapped
       let swap2 = current.next.next; // Second node to be swapped
       
       // Perform the swap
       swap1.next = swap2.next; // Link the first node to the node after the second node
       swap2.next = swap1;      // Link the second node to the first node

       current.next = swap2;    // Link the current node to the second swapped node
       current = swap1;         // Move the current pointer to the next pair

       // At this point, the current pair has been swapped, and the current pointer is moved to the next pair
   }

   return dummyNode.next; 
};