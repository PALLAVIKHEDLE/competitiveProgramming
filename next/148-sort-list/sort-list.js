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
var sortList = function (head) {
    if(!head || !head.next) return head
    let fast=slow=head
    while(fast.next && fast.next.next){
        fast=fast.next.next
        slow=slow.next

    }
    let middle=slow.next
    slow.next=null
    return merge(sortList(head), sortList(middle))
};

const merge=(first, second)=>{
    const dummyNode= new ListNode(0)
    let temp= dummyNode
    while(first && second){
        temp.next=(first.val<second.val)?first:second
        temp=temp.next
        if(first.val<second.val)first=first.next
        else second=second.next
    }
if(first)temp.next=first
if(second)temp.next=second 
 return dummyNode.next
}

