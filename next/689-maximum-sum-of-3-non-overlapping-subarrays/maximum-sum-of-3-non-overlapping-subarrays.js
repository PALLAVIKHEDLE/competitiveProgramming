/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length;
    const sumArr = new Array(n + 1).fill(0); // Prefix sum array
    for (let i = 0; i < n; i++) {
        sumArr[i + 1] = sumArr[i] + nums[i];
    }

    const left = new Array(n).fill(0); // Best left subarray starting indices
    const right = new Array(n).fill(0); // Best right subarray starting indices
    const result = [0, 0, 0]; // Result to store final indices

    // Compute left array
    let maxLeftIndex = 0;
    for (let i = k - 1; i < n; i++) {
        if (sumArr[i + 1] - sumArr[i + 1 - k] > sumArr[maxLeftIndex + k] - sumArr[maxLeftIndex]) {
            maxLeftIndex = i + 1 - k;
        }
        left[i] = maxLeftIndex;
    }

    // Compute right array
    let maxRightIndex = n - k;
    for (let i = n - k; i >= 0; i--) {
        if (sumArr[i + k] - sumArr[i] >= sumArr[maxRightIndex + k] - sumArr[maxRightIndex]) {
            maxRightIndex = i;
        }
        right[i] = maxRightIndex;
    }

    // Find the maximum sum for the three subarrays
    let maxSum = 0;
    for (let i = k; i <= n - 2 * k; i++) {
        const l = left[i - 1];
        const r = right[i + k];
        const totalSum =
            (sumArr[l + k] - sumArr[l]) +
            (sumArr[i + k] - sumArr[i]) +
            (sumArr[r + k] - sumArr[r]);
        if (totalSum > maxSum) {
            maxSum = totalSum;
            result[0] = l;
            result[1] = i;
            result[2] = r;
        }
    }

    return result;
};