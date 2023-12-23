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
var insertionSortList = function(head) {
    if(!head)return null
    let dummyNode=new ListNode(0, head)
    let prev=head,curr=head.next
    while(curr){
        if(curr.val>=prev.val){
            prev=curr
            curr=curr.next
        }else{
            let temp=dummyNode
            //find correct position to insert current node
            while(temp.next && temp.next.val<curr.val){
                temp=temp.next
            }
            prev.next=curr.next// remove current node
            curr.next=temp.next// insert current node
            temp.next=curr
            // things sorted out, let's move to the next pointer
            curr=prev.next
        }
    }
return dummyNode.next    
};