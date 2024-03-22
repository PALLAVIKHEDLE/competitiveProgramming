/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
 //find the middle of the linked list using the two pointer technique
 let fast=slow=head
 while(fast && fast.next){
     fast=fast.next.next
     slow=slow.next
 }

 //revered the second half of the list 
 let reversedList=reverseList(slow)
 //compare the original first half with the reversed second half 
 return compareList(head, reversedList)
}
//reverseList
function reverseList(head){
    let prev=null
    while(head){
        let tempVal=head.next
        head.next=prev
        prev=head
        head=tempVal
    }
 return prev   
}
//compare two linked list
function compareList(list1,list2){
while(list1 && list2){
    if(list1.val!==list2.val)return false
    list1=list1.next
    list2=list2.next
}
return true
}