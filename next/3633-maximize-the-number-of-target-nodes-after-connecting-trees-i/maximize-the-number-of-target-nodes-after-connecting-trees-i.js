/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
 var bfs=function(adj,n,k,start){
    let queue=[];
    queue.push(start);
    let visited = Array.from({ length: n }, () => false);
    visited[start]=true;

    let cnt=0,d=0;
    while(queue.length && d<=k){
        let sz=queue.length;
        while(sz-->0)
          {
            let node = queue.shift();
            cnt++;
            for (let n of adj[node]) {
                 if (!visited[n]) {
                     visited[n] = true;
                     queue.push(n);
                 }
            }
        }
        d++;
       
    }
    return cnt;

 }
var maxTargetNodes = function(edges1, edges2, k) {
    const n = edges1.length + 1;
    const m = edges2.length + 1;

    const adj1 = Array.from({ length: n }, () => []);
    const adj2 = Array.from({ length: m }, () => []);

    for (const [u, v] of edges1) {
      adj1[u].push(v);
      adj1[v].push(u);
    }
    for (const [u, v] of edges2) {
      adj2[u].push(v);
      adj2[v].push(u);
    } 


    const good1 = new Array(n).fill(0);
    const good2 = new Array(m).fill(0);
    for(let i=0;i<n;i++)
    good1[i]=bfs(adj1,n,k,i)

    let ans = 0;

    for(let i=0;i<m;i++)
    ans=Math.max(ans,bfs(adj2,m,k-1,i));
    for(let i=0;i<n;i++)
    good1[i]+=ans;
   return good1;
};