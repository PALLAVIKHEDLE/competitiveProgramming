/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
   nums.sort((a, b) => a - b); 
  return nums.pop() * nums.pop() - nums.shift() * nums.shift(); //get two max and two min number 
};