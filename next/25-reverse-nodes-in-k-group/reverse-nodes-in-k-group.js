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
var reverseKGroup = function(head, k) {
    let dummyNode= new ListNode(0)
    dummyNode.next=head//head of the input list
    let prevGroupTail=dummyNode//Pointer to dummy node
    while(head){
        let groupStart=head, groupEnd=getGroupEnd(head,k)// return the end node of thr current group
        if(!groupEnd) break //if group is incomplete, break out of the loop

        //reverse the current group and connect to the previous one
        prevGroupTail.next=reverseList(groupStart, groupEnd.next)

        //update the pointer to the end of the reversed group
        prevGroupTail=groupStart
        head=prevGroupTail.next
    }
return dummyNode.next
}
function getGroupEnd(head,k){
    while(head&&k>1){
        head=head.next
        k--
    }
 return head   
}

function reverseList(start,stop){
    let temp=stop
    while(start!==stop){
        let next=start.next
        start.next=temp//update the next pointer of the start node
        temp=start
        start=next
    }
return temp
}