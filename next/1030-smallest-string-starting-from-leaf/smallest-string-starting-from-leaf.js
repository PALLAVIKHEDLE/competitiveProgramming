/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let smallestString='';
     if(!root)return '';
     let queue=[[root, String.fromCharCode(97+root.val)]] //Start queue with root and its character

     while(queue.length){
        let [node, path]=queue.shift();
        if(!node.left && !node.right){ //leaf node found
            //Construct the string from leaf to root
            let currString=path.split('').reverse().join('');
            //Compare with smallest found string
            if(smallestString==''||currString<smallestString)smallestString=currString
        }
        //Traverse to child nodes
        if(node.left)queue.push([node.left, path+String.fromCharCode(97+node.left.val)]);
        if(node.right)queue.push([node.right, path+String.fromCharCode(97+node.right.val)]);
     }
  return smallestString
};