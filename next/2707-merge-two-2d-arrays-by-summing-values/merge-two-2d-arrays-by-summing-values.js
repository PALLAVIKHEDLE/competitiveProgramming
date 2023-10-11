/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  let map = {}, result = [];

  // Count occurrences in nums1
  for (let i = 0; i < nums1.length; i++) {
    let key = nums1[i][0];
    if (map[key] === undefined) map[key] = nums1[i][1];
    else map[key] += nums1[i][1];
  }

  // Count occurrences in nums2
  for (let i = 0; i < nums2.length; i++) {
    let key = nums2[i][0];
    if (map[key] === undefined) map[key] = nums2[i][1];
    else map[key] += nums2[i][1];
  }
console.log('map','map',map)
  // Push key-value pairs to the result array
  for (let key in map) {
    result.push([key, map[key]]);
  }

  return result;
};
