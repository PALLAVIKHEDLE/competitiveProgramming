/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */

var maximumValueSum = function(nums, k, edges) {
    let totalSum = 0;
    let count = 0;
    let positiveMin = Number.MAX_SAFE_INTEGER;
    let negativeMax = Number.MIN_SAFE_INTEGER;

    for (let nodeValue of nums) {
        let nodeValAfterOperation = nodeValue ^ k;
        totalSum += nodeValue;
        let netChange = nodeValAfterOperation - nodeValue;

        if (netChange > 0) {
            positiveMin = Math.min(positiveMin, netChange);
            totalSum += netChange;
            count += 1;
        } else {
            negativeMax = Math.max(negativeMax, netChange);
        }
    }

    // If count of positive changes (netChange > 0) is even, return totalSum directly
    if (count % 2 === 0) {
        return totalSum;
    }
   
    // If count is odd, we need to decide whether to adjust using positiveMin or negativeMax
    return Math.max(totalSum - positiveMin, totalSum + negativeMax);
};
