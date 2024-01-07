/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
   let count = 0;
  let frequency = {};

  for (let num of nums) {
    let complement = k - num;

    if (frequency[complement] && frequency[complement] > 0) {
      // Found a pair
      count++;
      frequency[complement]--;
    } else {
      // Increment the frequency of the current number
      frequency[num] = (frequency[num] || 0) + 1;
    }
  }

  return count;
};