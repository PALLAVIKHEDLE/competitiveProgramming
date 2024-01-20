/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 function mergeLists(l1,l2){
     const dummy=new ListNode(0)
     let current=dummy
     if(!l1 || !l2) return l1?l1:l2

     while(l1 && l2){
         if(l1.val<l2.val){
             current.next=l1
             l1=l1.next
         }else{
             current.next=l2
             l2=l2.next
         }
         current=current.next
     }
     current.next=l1||l2
  return dummy.next   
 }
var mergeKLists = function(lists) {
  if(lists.length==0)return null
  //it takes 2 list at a time, loop continues until there is only one list left
  while(lists.length>1){
      let l1=lists.shift()
      let l2=lists.shift()
      const val=mergeLists(l1,l2)
      lists.push(val)
  } 
  return lists[0] 
};