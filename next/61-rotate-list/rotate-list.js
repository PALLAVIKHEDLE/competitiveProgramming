/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //1. count total no of nodes 
    if(!head) return head
    let count=0, curr=head
    while(curr!==null){
        count++
        curr=curr.next
    }
    //2. Number of rotations are now restricted within the limit
    k=k%count
    let prev=head;
    curr=head

    //3. Moving one pointer k positions ahead
    while(k--){
        curr=curr.next
    }
    //4. Now since our ptr is k steps ahead then it will tell us the kth position from end
// i.e we iterate until ptr.next !==null and we move our prev pointer. Once ptr.next===null
// i.e ptr reaches the last node, out prev pointer will be exactly at the kth position from end
// Here kth position from end is nothing but the number of k rotations
	while (curr.next) {
		prev = prev.next;
		curr = curr.next;
	}

//5,Now simply break the list after prev node. Last node i.e ptr will now point to head
//i.e ptr.next=head, next node of prev becomes our new head and finally prev becomes our 
//last node so prev.next=null
// Simply modifying the head and last node
	curr.next = head;
	head = prev.next;
	prev.next = null;
	return head;

};





