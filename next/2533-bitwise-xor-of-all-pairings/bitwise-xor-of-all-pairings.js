/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const xor = (a, b) => a.length % 2 ? b.reduce((x, y) => x ^ y): 0
const xorAllNums = (nums1, nums2) => xor(nums1, nums2) ^ xor(nums2, nums1);