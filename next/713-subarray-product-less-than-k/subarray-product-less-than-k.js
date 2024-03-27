/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0; // Handle edge case when k is less than or equal to 1
    
    let product = 1,
        start = 0,
        end = 0,
        count = 0;
    
    while (end < nums.length) {
        product *= nums[end];
        while (product >= k) {
            product = product / nums[start];
            start++;
        }
        count += end - start + 1;
        end++;
    }
    
    return count;
};