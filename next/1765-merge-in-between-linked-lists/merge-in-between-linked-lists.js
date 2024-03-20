/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let current=list1, count=0
    // Traverse until the node before index 'a'
    while(count<a-1){
        current=current.next
        count++
    }
    let nodeBeforeA=current

    // Traverse until index 'b'
    while(count<b){
        current=current.next
        count++
    }
     let nodeAfterB = current.next;
    // Connect the last node of list2 to the node after 'b'
    let tailOfList2=list2
    while(tailOfList2.next!==null){
        tailOfList2=tailOfList2.next
    }
    tailOfList2.next=nodeAfterB
 // Connect node before 'a' to the head of list2
    nodeBeforeA.next = list2;

return list1
};