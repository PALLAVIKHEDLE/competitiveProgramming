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
    // //Store all values from the linked list in an array
    // let valueArray=[]
    // while(head){
    //     valueArray.push(head.val)
    //     head=head.next
    // }
    // //check if list of values are a palindrome
    // let left=0, right=valueArray.length-1
    // while(left<=right){
    //     if(valueArray[left]!==valueArray[right])return false
        
    //     left++, right--
    // }
    // return true;


    // Find the middle of the linked list using the two-pointer technique
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let reversedList = reverseList(slow);

    // Compare the original first half with the reversed second half
    return compareLists(head, reversedList);
}
//reverse List
const reverseList =(head)=>{
    let prev=null
    while(head){
        let temp= head.next
        head.next=prev
        prev=head
        head=temp
    }
    return prev
}

// compare two linked lists
    const compareLists = function(list1, list2) {
        while (list1 && list2) {
            if (list1.val !== list2.val) {
                return false;
            }
            list1 = list1.next;
            list2 = list2.next;
        }
        return true;
    };

