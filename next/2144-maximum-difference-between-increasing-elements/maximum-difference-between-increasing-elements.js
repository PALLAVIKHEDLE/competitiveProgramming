/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max = -1, currMax = nums.at(-1);
    for (let i = nums.length - 2; i >= 0; --i) {
        if (nums[i] < currMax) max = Math.max(max, currMax - nums[i]);
        currMax = Math.max(currMax, nums[i]);
    }
    return max;
};