/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
//     let arr=[], max=0
//     while(head){
//         arr.push(head.val)
//         head=head.next
//     }
//     for(let i=0; i<arr.length; i++){ 
//         let sum= arr[i]+arr[arr.length-1-i]
//         max=Math.max(max, sum)
//     }
//    return max 

let slow=fast=head, maxVal=0

//find midpoint of listNode
while(fast&& fast.next){
    fast=fast.next.next
    slow=slow.next
}
    // reverse second half of listNode
    let prev=null, nextNode=new ListNode()
    while(slow){
        nextNode=slow.next
        slow.next=prev
        prev=slow
        slow=nextNode
    }

    //get max pair
    while(prev){
        maxVal=Math.max(maxVal, prev.val+head.val)
        head=head.next
        prev=prev.next
    }
return maxVal;
};