/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    //Create an adjacency list representation of the graph
    let adjList=new Array(n).fill(null).map(()=>[]);
    //Build the adjacency list from the given edges
    for(const [u,v] of edges){
        adjList[u].push(v);
        adjList[v].push(u);//it's bidirectional graph
    }
    //BFS to find a path from source to destination
    let queue=[source];
    let visited=new Set(queue);

    while(queue.length){
        let curr=queue.shift();
        if(curr==destination)return true // Found a path from source to destination

        // Visit all neighbors of the current vertex
        for(let neighbor of adjList[curr]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }
    return false; // No path found from source to destination
};