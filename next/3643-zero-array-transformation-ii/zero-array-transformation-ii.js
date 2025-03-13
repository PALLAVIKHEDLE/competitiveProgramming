/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */

var minZeroArray = function(nums, queries) {
    const n = nums.length;
    const m = queries.length;

    let l = -1;
    let r = m+1;
    let mid;

    while ((r-l) > 1) {
        mid = l + Math.floor((r-l)/2)
        if (isGood(mid)) {
            r = mid;
        } else {
            l = mid
        }
    }

    return r === (m+1) ? -1 : r;
    

    function isGood(k) {
        const sweepLine = new Array(n+1).fill(0);

        for (let i = 0; i < k; i++) {
            const [s, e, val] = queries[i];
            sweepLine[s] += val;
            sweepLine[e+1] -= val;
        }
        let acc = 0;

        for (let i = 0; i < n; i++) {
            acc += sweepLine[i];
            if (nums[i] > acc) {
                return false
            }
        }

        return true;
    }

};