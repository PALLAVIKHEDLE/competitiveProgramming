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
            map[nums[start++]] -= 1;
        }
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;


    // let map = {}, maxLength = 0, start = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     map[nums[i]] = (map[nums[i]] || 0) + 1;

    //     // Shrink the window until the condition is met
    //     while (Math.max(...Object.values(map)) > k) {
    //         map[nums[start]]--;
    //         start++;
    //     }

    //     // Update the maxLength with the current window size
    //     maxLength = Math.max(maxLength, i - start + 1);
    // }

    // return maxLength;
};