/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const dict = {};
    
    edges.map(([v1, v2])=> {
        dict[v1] = dict[v1] ? dict[v1]+1 : 1;
        dict[v2] = dict[v2] ? dict[v2]+1 : 1;
    })
    
    return Object.entries(dict).find(([k,v])=> v>1)[0]
};