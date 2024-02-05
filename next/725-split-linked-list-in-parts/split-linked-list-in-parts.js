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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let parts=[], current=head, length=0
    //Get the linked list length
    while(current){
        length++
        current=current.next
    }
    let base_size=Math.floor(length/k),  //base size of each part
        extra=length%k;//number of extra nodes
    current=head//reset current to head for traversal 

    for(let i=0; i<k; i++){//number of parts linked lists will be split into-
        let part_size=base_size+(extra>0?1:0)// calculate thr size of the current part
        let part_head=part_tail=null
        for(let j=0; j<part_size; j++){
            if(!part_head)part_head=part_tail=current
            else{
                part_tail.next=current
                part_tail=part_tail.next
            }
            if(current)current=current.next
        }
        if(part_tail)part_tail.next=null// terminate the current part
        parts.push(part_head)
        extra=Math.max(extra-1,0)// decrement the remaining extra nodes
    }
return parts
}