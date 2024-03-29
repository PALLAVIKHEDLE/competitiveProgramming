/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
     let max = Math.max(...nums);
    let count = 0;
    let left = 0;
    let right = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) right++;

        while (right >= k) {
            if (nums[left] === max) right--;
            left++;
        }
        // count += (i - left + 1);
        count+=left
    }
    return count;
};