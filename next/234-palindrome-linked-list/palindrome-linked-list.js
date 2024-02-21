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
    //Find the middle of the linked list using the two pointers technique
    let slow=fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    let reversedList =reversList(slow)//reverse the second half

    // Compare the original first half with the reversed second half
    return compareLists(head, reversedList);
};
//reverse list 
const reversList=(head)=>{
    let prev=null
    while(head){
        let temp=head.next
        head.next=prev
        prev=head
        head=temp
    }
 return prev   
}
//compare two linked list
const compareLists = function (list1, list2){
    while(list1 && list2){
        if(list1.val!==list2.val) return false

        list1=list1.next
        list2=list2.next
    }
 return true   
}