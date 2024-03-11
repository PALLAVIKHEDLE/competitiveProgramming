/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length==0)return null
    //it takes 2 list at a time, loop continue until there is only one list left
    while(lists.length>1){
        let list1=lists.shift()
        let list2=lists.shift()
        const val =mergeLists(list1, list2)
        lists.push(val)
    }
    return lists[0]
};

function mergeLists(l1,l2){
    const dummy=new ListNode(0)
    let curr=dummy
    if(!l1||!l2)return l1?l1:l2
    while(l1&&l2){
        if(l1.val<l2.val){
            curr.next=l1
            l1=l1.next
        }else{
            curr.next=l2
            l2=l2.next
        }
        curr=curr.next
    }
    curr.next=l1||l2

return dummy.next    
}