/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //recusive Approach
    // if(!list1||!list2) return list1?list1:list2
    // if(list1.val<=list2.val){
    //     list1.next=mergeTwoLists(list1.next,list2)
    //     return list1
    // }else{
    //     list2.next=mergeTwoLists(list1, list2.next)
    //     return list2
    // }
    
//second approach
let head=new ListNode(0, null)
let current=head//cureent use to be traversing, head will be first node
if(!list1||!list2) return list1?list1:list2
    while(list1 && list2){
        if(list1.val<=list2.val){
            current.next=list1
            list1=list1.next
        }else{
            current.next=list2
            list2=list2.next
        } 

       current=current.next 
    }
   current.next=list1||list2//After the loop, if there are remaining nodes in either list1 or list2, they are attached to the merged list.

      // return next because head was initialized to null
 return head.next

};