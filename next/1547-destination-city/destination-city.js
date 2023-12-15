/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let map = {};

    // Set source and destination
    for (let [s, d] of paths) {
        if (map[d] === undefined)map[d] = null;//if there is no destination already in the map, then set null
        map[s] = d;
    }

    for (let [s, d] of Object.entries(map)) {
        if (d === null) return s;  // Find source with destination null
    }
return null;
};