/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow=fast=head;
    while(fast?.next?.next){
        slow=slow.next
        fast=fast.next.next

        if(fast==slow)return true
    }
return false
};
