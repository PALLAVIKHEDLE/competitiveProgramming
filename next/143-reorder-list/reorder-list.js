/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
   let current=tempHead=head
  while(current){
      let temp=current.next
      let targetNode=getSecondLastNode(current)
      if (current == targetNode|| targetNode==null) break
      current.next=targetNode.next
      targetNode.next=null
      if (current.next !== null) {
          current.next.next=temp
          current=current.next.next
      }
  }
 return tempHead
};


const getSecondLastNode = (head) => {
if(!head) return head
let prev = null
  while(head.next){
      prev = head
      head = head.next
  }
 return prev
}