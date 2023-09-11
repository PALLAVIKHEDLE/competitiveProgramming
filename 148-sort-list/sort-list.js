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
var sortList = function(head) {
    // if(!head)return null
    // let dummyNode= new ListNode(0,head)

    // let curr=head.next,prev=head
    // while(curr){
    //     if(prev<curr){
    //         prev=curr
    //         curr=curr.next
    //     }else{
    //         if(prev>dummyNode){
    //             prev=
    //         }
    //     }
    // }

    if(!head)return null
    let prev=head, curr=head.next
    let dummyNode= new ListNode(0, head)
  //ListNode class with a value of 0 and its next pointing to the original head of the linked list.
    while(curr){
        //if it's already sorted, we move on
        if(curr.val>=prev.val){
            prev=curr
            curr=curr.next
        }else{
            //iterate over since the beginning until we find the place to add
            let temp=dummyNode
            // console.log('temp',temp)
            // console.log('next',temp.next.val, curr.val)
            while(curr.val>temp.next.val){
                temp=temp.next
            }
            // console.log('remove',prev.next, curr.next, temp.next, curr)
            //remove the current 
            prev.next=curr.next
            //insert current between
            curr.next=temp.next
            temp.next=curr
            // things sorted out, let's move to the next pointer
            curr = prev.next;
        }
    }
return dummyNode.next
};