/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
    let graph = new Array(n).fill(null).map(() => []);
    let res = 0;

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = new Array(n).fill(false);
    function dfs(u) {
        visited[u] = true;
        ++vertCount;

        for (let v of graph[u]) {
            ++edgeCount;
            if (!visited[v]) {
                dfs(v);
            }
        }
    }

    for (let i = 0; i < n; ++i) {
        if (!visited[i]) {
            vertCount = 0;
            edgeCount = 0;
            dfs(i);
            if (vertCount * (vertCount - 1) === edgeCount) {
                ++res;
            }
        }
    }



    return res;
};