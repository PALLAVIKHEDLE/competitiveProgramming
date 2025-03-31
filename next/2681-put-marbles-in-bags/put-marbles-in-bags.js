/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
    let n = weights.length;
    if (k === 1) return 0; // Only one partition, so min and max scores are equal.

    let pairSums = [];

    // Step 1: Compute adjacent pair sums
    for (let i = 0; i < n - 1; i++) {
        pairSums.push(weights[i] + weights[i + 1]);
    }

    // Step 2: Sort pairSums
    pairSums.sort((a, b) => a - b);

    let minScore = 0, maxScore = 0;

    // Step 3: Compute min and max scores using k-1 cuts
    for (let i = 0; i < k - 1; i++) {
        minScore += pairSums[i];                 // Sum of smallest k-1 elements
        maxScore += pairSums[n - 2 - i];         // Sum of largest k-1 elements
    }

    // Step 4: Return the difference
    return maxScore - minScore;
};