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
//     let maxSum=0, arr=[]
//     while(head){
//         arr.push(head.val)
//         head=head.next
//     }

//     for(let i=0; i<arr.length;i++){
//         let sum=arr[i]+arr[arr.length-1-i]
//         maxSum=Math.max(sum, maxSum)
//     }
//  return maxSum   

let maxSum=0, slow=fast=head
while(fast&&fast.next){
    fast=fast.next.next
    slow=slow.next
}

let prev=null, curr=slow//(middle of the linked list)
//reverse the second half of the list
while(curr){
    let temp=curr.next
    curr.next=prev
    prev=curr
    curr=temp
}
//get max pair
while(prev){
    maxSum=Math.max(maxSum, prev.val+head.val)
    head=head.next
    prev=prev.next
}
return maxSum
};