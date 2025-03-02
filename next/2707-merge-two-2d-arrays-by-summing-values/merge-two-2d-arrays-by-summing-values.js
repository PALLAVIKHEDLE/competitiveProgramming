/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  let map = new Map();
  
  // Count occurrences in nums1
  for (let i = 0; i < nums1.length; i++) {
    let key = nums1[i][0];
    let value = nums1[i][1];
    map.set(key, (map.get(key) || 0) + value);
  }

  // Count occurrences in nums2
  for (let i = 0; i < nums2.length; i++) {
    let key = nums2[i][0];
    let value = nums2[i][1];
    map.set(key, (map.get(key) || 0) + value);
  }

  // Convert map entries back to array and ensure keys are numbers
  let result = Array.from(map.entries()).map(([key, value]) => [Number(key), value]);

  // Sort the result to maintain order
  result.sort((a, b) => a[0] - b[0]);

  return result;
};
