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
    let maxSum=0, arr=[]
    while(head){
        arr.push(head.val)
        head=head.next
    }

    for(let i=0; i<arr.length;i++){
        let sum=arr[i]+arr[arr.length-1-i]
        maxSum=Math.max(sum, maxSum)
    }
 return maxSum   
};