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
  let fast=slow=head, temp=null
  //Move fast pointer till k nodes
  for(let i=1; i<k; i++)fast=fast.next
  //store the node at position k in temp
  temp=fast
  //move both the pointer until fast reaches the end
  while(fast.next){
      fast=fast.next
      slow=slow.next
  }

  //swap the value
        // let tempVal=temp.val
        // temp.val=slow.val
        // slow.val=tempVal

    [temp.val,slow.val]=[slow.val,temp.val]
return head
}; 