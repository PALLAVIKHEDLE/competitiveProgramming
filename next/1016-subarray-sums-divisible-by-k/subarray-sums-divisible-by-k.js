/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
     let map = {0:1},currentSum =count = 0;//, indicating there's one subarray with a sum of 0 (which is divisible by any k).

    for (num of nums) {
        currentSum += num;
        let key = currentSum % k;
        if (key < 0) key += k; // Handle negative remainders
        if (key in map) {
            count += map[key];
            map[key] += 1;
        } else map[key] = 1; 
    }
    return count;
};