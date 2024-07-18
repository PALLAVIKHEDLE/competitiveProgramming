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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let result=0
  let dfs=(node)=>{
        if(!node||distance===1)return []
        if(!node.left&&!node.right)return [1]
        let l=dfs(node.left),r=dfs(node.right)
        if(!node.left||!node.right)return l.length?l.map(d=>d+1):r.map(d=>d+1)
        for(let ld of l)
            for(let rd of r)
                if(ld+rd<=distance)result++
        return [...l,...r].map(d=>d+1)
    }
    dfs(root)
    return result
};
