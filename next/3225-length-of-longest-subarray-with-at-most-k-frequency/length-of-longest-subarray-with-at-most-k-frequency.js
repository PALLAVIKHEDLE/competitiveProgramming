/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let map={}, maxLength=start=0;
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;

        while (map[nums[i]] > k) {
            // now our target is to reduce the frequency of the current element by
            // removing the element from the left side of the array
            // map[nums[start++]] -= 1;
            map[nums[start]]--
            start++
        }
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
};