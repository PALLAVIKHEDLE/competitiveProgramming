/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
      while (k > 0) {
        let min = Number.MAX_VALUE;
        let minIndex = -1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
                minIndex = i;
            }
        }

        nums[minIndex] *= multiplier;
        k--;
    }

    return nums;
};