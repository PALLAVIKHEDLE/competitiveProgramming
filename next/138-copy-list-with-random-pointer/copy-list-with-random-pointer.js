/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  const hasTable=new Map()
    let curr=head
    while(curr){
        const newNode= new Node(curr.val)
        hasTable.set(curr,newNode)
        curr=curr.next
    }
    hasTable.forEach((node,key)=>{
        node.next=hasTable.get(key.next)||null;
        node.random=hasTable.get(key.random)||null;
    })
 return hasTable.get(head)

};