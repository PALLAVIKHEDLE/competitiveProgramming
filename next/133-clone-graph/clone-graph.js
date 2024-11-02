/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return node;
    const map ={};

    const dfs=(root)=>{
        if(map[root.val]==undefined){
            map[root.val]=new Node(root.val);
            map[root.val].neighbors=root.neighbors.map(dfs) 
        }
        return map[root.val]

    }
    return dfs(node)
};