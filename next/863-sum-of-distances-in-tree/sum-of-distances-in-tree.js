/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
   // Build adjacency list representation of the tree
    const graph= new Array(n).fill(null).map(()=>[])
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    console.log('Graph',graph)
    // To keep track of the count of nodes and the sum of distances for each node
    const count = new Array(n).fill(0);
    const distanceSum = new Array(n).fill(0);
    
    // First depth-first search (DFS) to calculate counts and initial distance sums
    const dfs1=(curr,parent)=>{
        count[curr]=1
        for(let child of graph[curr]){
            if(child!==parent){
                dfs1(child,curr)
                count[curr]+=count[child];
                distanceSum[curr]+=distanceSum[child]+count[child]
            }
        }
    }

  // Second DFS to calculate distance sums for all nodes
    const dfs2=(curr,parent)=>{
        for(let child of graph[curr]){
            if(child!==parent){
                // Update distance sum for the child node based on the current node
                distanceSum[child]=distanceSum[curr]+n-2*count[child]
                dfs2(child,curr)
            }
        }
    }
    
    // Initialize DFS from the root node (node 0) with parent as -1
    dfs1(0,-1);
     // Further DFS to compute the final distance sums for all nodes
    dfs2(0,-1);

    return distanceSum;
};