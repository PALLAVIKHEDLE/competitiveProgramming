/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return atMostKDistinct(nums,k)-atMostKDistinct(nums,k-1)
};
    const atMostKDistinct = (nums, k) => {
        const freq = new Map();
        let distinctCount = 0,
            left = 0,
            totalSubarrays = 0;

        for (let right = 0; right < nums.length; right++) {
            if (!freq.has(nums[right]) || freq.get(nums[right]) === 0) {
                distinctCount++;
            }
            freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

            while (distinctCount > k) {
                freq.set(nums[left], freq.get(nums[left]) - 1);
                if (freq.get(nums[left]) === 0) {
                    distinctCount--;
                }
                left++;
            }
            totalSubarrays += right - left + 1;
        }
        return totalSubarrays;
    };