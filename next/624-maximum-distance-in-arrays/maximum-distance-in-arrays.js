/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let ans = 0;
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length-1];

    let n = arrays.length;
    for (let i = 1; i < n; i++) {
        let curr = arrays[i];

        ans = Math.max(ans, Math.abs(min - curr[curr.length-1]), Math.abs(max - curr[0]));
        min = Math.min(min, curr[0]);
        max = Math.max(max, curr[curr.length-1]);
    }

    return ans;
};