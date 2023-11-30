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
    let current=head, tempHead=head
    while(current){
    let nextTemp=current.next
    let newOrder=getSecondLastElement(current)
    if (current == newOrder|| newOrder==null) break
    console.log('newOrder', newOrder)
 
    current.next=newOrder.next
    newOrder.next=null
    current.next.next=nextTemp
    current=current.next.next
    }
 return tempHead   
};
function getSecondLastElement(current){
    if(!current) return current
    let prev=null
    while(current.next){
        prev=current
        current=current.next
    }
return prev    
}



//  let current=head, tempHead=head
//   while(current){
//       let temp=current.next
//       let targetNode=getSecondLastNode(current)
//       if (current == targetNode|| targetNode==null) break
//       current.next=targetNode.next
//       targetNode.next=null
//       if (current.next !== null) {
//           current.next.next=temp
//           current=current.next.next
//       }
//   }
//  return tempHead
// };