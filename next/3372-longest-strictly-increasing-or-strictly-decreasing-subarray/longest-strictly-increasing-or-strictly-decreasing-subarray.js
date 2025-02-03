/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let increase = 1;
    let decrease = 1;
    let maxL = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            increase++;
            decrease = 1;
        } else if (nums[i] < nums[i - 1]) {
            decrease++;
            increase = 1;
        } else {
            increase = 1;
            decrease = 1;
        }
         maxL = Math.max(maxL, increase, decrease);
    }
    return maxL;
};