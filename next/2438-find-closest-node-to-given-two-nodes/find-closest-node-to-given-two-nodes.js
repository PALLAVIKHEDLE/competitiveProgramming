/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */

 var getDistances = function(startNode, edges) {
    const n = edges.length;
    const dist = new Array(n).fill(-1);
    let curr = startNode;
    let d = 0;

    while (curr !== -1 && dist[curr] === -1) {
        dist[curr] = d;
        curr = edges[curr];
        d++;
    }

    return dist;
};

var closestMeetingNode = function(edges, node1, node2) {
    const dist1 = getDistances(node1, edges);
    const dist2 = getDistances(node2, edges);

    let minDist = Infinity;
    let result = -1;

    for (let i = 0; i < edges.length; i++) {
        if (dist1[i] !== -1 && dist2[i] !== -1) {
            const maxDist = Math.max(dist1[i], dist2[i]);
            if (maxDist < minDist) {
                minDist = maxDist;
                result = i;
            }
        }
    }

    return result;
};