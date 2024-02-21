/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head)return null
    let prev=head, curr=head.next
    while(curr){
        if(curr.val==val){
            curr=curr.next
            prev.next=curr
        }else{
            prev=curr
            curr=curr.next
        }
    }
   if(head.val==val) return head.next
    return head
};
  