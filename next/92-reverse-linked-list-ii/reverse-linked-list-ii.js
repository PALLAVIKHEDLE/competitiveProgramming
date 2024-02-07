/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    //TWO POINTERS
    if(!head || left==right)return head
    //Create a dummy node and connect its next to the head of the list
    let dummy=new ListNode(0, head)
 
    let prev=dummy // Initialize a prev pointer to the dummy node
    for(let i=0; i<left-1;i++) prev=prev.next

    let curr=prev.next// use a current pointer to keep track of the first node in the sublist
    for(let i=0; i<right-left; i++){
        const nextNode=curr.next
        curr.next=nextNode.next
        nextNode.next=prev.next
        prev.next=nextNode
    }
return dummy.next
};