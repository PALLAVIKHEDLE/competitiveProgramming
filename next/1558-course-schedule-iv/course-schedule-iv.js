/**
 * @param {number} numCourses - Number of courses (nodes)
 * @param {number[][]} prerequisites - Array of prerequisite pairs [u, v], where u is a prerequisite of v
 * @param {number[][]} queries - Array of queries [src, target] to check if src is a prerequisite of target
 * @return {boolean[]} - An array of boolean values corresponding to each query
 */
var checkIfPrerequisite = function (N, prerequisites, queries) {
    // Step 1: Build the adjacency list to represent the graph
    const adj_list = Array.from({ length: N }, () => []); // Adjacency list for the graph
    for (const [u, v] of prerequisites) {
        adj_list[u].push(v); // Add edge from u to v
    }

    // Step 2: Initialize memoization (dp array)
    // dp[src][target] will store whether 'target' is reachable from 'src'
    const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => -1));

    // Step 3: Define DFS function to check reachability
    const DFS = function (src, target) {
        // If result is already computed, return it
        if (dp[src][target] !== -1) {
            return dp[src][target];
        }

        // If the source and target are the same, they are trivially reachable
        if (src === target) {
            return true;
        }

        // Traverse all children (neighbors) of the current node
        for (const child of adj_list[src]) {
            // Recursively check if the target is reachable from the child
            const isReachedDestination = DFS(child, target);
            dp[child][target] = isReachedDestination; // Memoize result
            if (isReachedDestination) {
                return true; // If reachable, return true
            }
        }

        // If no path to the target is found, return false
        return false;
    };

    // Step 4: Process each query
    const result = [];
    for (const [src, destination] of queries) {
        // Check if the target is reachable from the source using DFS or memoized result
        const destinationReachable =
            dp[src][destination] === -1 ? DFS(src, destination) : dp[src][destination];
        result.push(destinationReachable); // Store the result for the current query
    }

    // Step 5: Return results for all queries
    return result;
};