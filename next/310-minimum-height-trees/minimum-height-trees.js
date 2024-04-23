/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(!edges.length)return [0]

    // Initialize an array to keep track of the degree (number of connections) of each node
    const depth=Array(n).fill(0);
    // Initialize an adjacency list representation of the graph
    const graph=Array.from({length:n},()=>[])
    // Populate the graph and calculate the degree of each node
    for(const [parent, child] of edges){
        graph[parent].push(child)// Add child to the parent's adjacency list
        graph[child].push(parent)// Add parent to the child's adjacency list
        depth[child]++ // Increment the degree of the child node
        depth[parent]++ // Increment the degree of the parent node
    }

    // Initialize a queue to store leaf nodes (nodes with degree 1)
    let queue=[], front=0;

    // Find all nodes with degree 1 and add them to the queue

    for(let i=0; i<depth.length;i++){
        if(depth[i]==1)queue.push(i)
    }

   // Process the graph until there are only 1 or 2 nodes left
    while(n>2){
     // Number of nodes to be processed in the current level of the BFS
        let pepEle=queue.length-front
        n-=pepEle
        for(let i=0; i<pepEle;i++){
            let curr=queue[front++] // Dequeue the current node
            for(let currGraph of graph[curr]){
                depth[currGraph]-- // Decrement the degree of the neighboring node
                // If the degree becomes 1 after decrementing, add it to the queue
                if(depth[currGraph]==1)queue.push(currGraph)
            }
        }
    }
    // Return the remaining nodes in the queue, which are the root node(s) of the minimum height tree(s)
  
    return queue.slice(front);
};