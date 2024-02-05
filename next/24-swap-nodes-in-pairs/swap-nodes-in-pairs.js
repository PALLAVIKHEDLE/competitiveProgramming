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
var swapPairs = function(head) {
    let dummyNode=new ListNode(0, head)
    let current=dummyNode
    while(current.next!=null && current.next.next!=null){
        let swap1= current.next
        let swap2=current.next.next

        swap1.next=swap2.next
        swap2.next=swap1
        
        current.next=swap2
        current=swap1
    }
return dummyNode.next
};