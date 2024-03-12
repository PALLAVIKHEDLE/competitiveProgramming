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
var removeZeroSumSublists = function(head) {
   let dummy = new ListNode(0);
    dummy.next = head;
    let prefixSum = 0;
    let map = {};
    
    let curr = dummy;
    
    while (curr !== null) {
        prefixSum += curr.val;
        map[prefixSum] = curr;
        curr = curr.next;
    }
    
    prefixSum = 0;
    curr = dummy;
    
    while (curr !== null) {
        prefixSum += curr.val;
        curr.next = map[prefixSum].next;
        curr = curr.next;
    }
    
    return dummy.next;
};