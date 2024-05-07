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
var doubleIt = function(head) {
    let curr=head, digits=[];
    while(curr){
        digits.push(curr.val);
        curr=curr.next;
    }
let carry=0, {length}=digits;

  // Process each digit from least significant to most significant (right to left)
    for(let i=length-1; i>=0; i--){
        carry+=2*digits[i];
        digits[i]=carry%10;
        carry=Math.trunc(carry/10)
    }
// If there is a remaining carry after the last iteration, prepend it to the array
  if (carry) digits.unshift(carry);
  // Variables to create the new linked list representing the doubled value
  let newHead = null,tail = null; 
  // Convert the array back to a linked list
  for (let value of digits) {
        current = new ListNode(value); 
        if (newHead) {
        tail.next = current; 
        tail = tail.next; 
        } else tail = newHead = current;
  }

return newHead;
};  