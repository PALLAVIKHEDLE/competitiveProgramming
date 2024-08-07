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
var mergeNodes = function(head) {
    let sum=0, curr=head.next
   let res=new ListNode()
   let ans=res
   while(curr){
       if(curr.val!==0)sum+=curr.val;
       else{
           res.next=new ListNode(sum)
           sum=0
           res=res.next
       }
   curr=curr.next
   }
   return ans.next

};