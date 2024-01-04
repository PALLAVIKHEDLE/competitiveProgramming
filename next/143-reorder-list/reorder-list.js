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
 if(!head)return head
 let current=tempHead=head
 while(current){
    let tmp=current.next
    let targetNode=getSeondLastElement(current)
    if(current==targetNode||targetNode==null)break
    current.next=targetNode.next
    targetNode.next=null
    if(current.next!==null){
        current.next.next=tmp
        current=current.next.next
    }
 }
return tempHead
}

function getSeondLastElement(head){
    let prev=null, curr=head
    while(curr.next){
        prev=curr
        curr=curr.next
    }
    return prev
}