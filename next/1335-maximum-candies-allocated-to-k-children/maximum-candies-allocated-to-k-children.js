/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    function ok(min_candy) {
        let count = 0;
        for (let candy of candies) count += Math.floor(candy / min_candy);
        return count >= k;
    }

    let l = 0,
        h = Math.max(...candies);

    while (l <= h) {
        let m = l + Math.trunc((h - l) / 2);
        if (ok(m)) l = m + 1;
        else h = m - 1;
    }
    return h;
};