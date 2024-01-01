/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    result=[]
    function dfs(node){
    if(!node)result.push('null')
    else{
        result.push(node?.val.toString())
        dfs(node?.left)
        dfs(node?.right)
    }
}
    dfs(root)
   return result.join(',')
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let array=data.split(","),
        i=0
    function dfs(){
        if(array[i]==='null'){
            i++
            return null
        }else{
            const node=new TreeNode(Number(array[i]))
            i++
            node.left=dfs()
            node.right=dfs()
            return node
        }
    }   
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */