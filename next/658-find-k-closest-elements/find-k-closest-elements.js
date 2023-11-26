/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
   let result = [];
  let diffsWithIndices = [];

  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(x - arr[i]);
    diffsWithIndices.push({ diff, index: i });
  }

  // Sort by absolute differences
  diffsWithIndices.sort((a, b) => a.diff - b.diff);

  // Take the first k elements with the smallest absolute differences
  for (let i = 0; i < k; i++) {
    result.push(arr[diffsWithIndices[i].index]);
  }

  // Sort the result array to maintain the order
  result.sort((a, b) => a - b);
  return result;
}