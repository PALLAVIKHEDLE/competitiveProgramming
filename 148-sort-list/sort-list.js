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
function sortList (head) {
    //MERGE SORT
if(!head || !head.next) return head;
    let fast=slow=head
    while(fast.next &&fast.next.next){
        fast=fast.next.next
        slow=slow.next
    }
    let middle=slow.next
    slow.next=null
    // while(fast){
    //     fast=fast.next.next
    //     slow=slow.next
    // }
    // let middle=slow
    // // slow.next=null
    return merge(sortList(head), sortList(middle))
};

const merge=(first,second)=>{
    let dummyNode=new ListNode(-1)
    let tmp=dummyNode
    while(first&&second){
        tmp.next=(first.val<second.val)?first:second
        tmp=tmp.next
        if(first.val<second.val)first=first.next
        else second=second.next
    }

    if(first)tmp.next=first
    if(second)tmp.next=second
    return dummyNode.next
}
