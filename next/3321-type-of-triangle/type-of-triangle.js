/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    // Check if it cannot form a triangle
    if (nums[0] + nums[1] <= nums[2])return "none";
    
    // Check the type of triangle
    if (nums[0] === nums[1] && nums[1] === nums[2]) return "equilateral";
    else if (nums[0] === nums[1] || nums[1] === nums[2]) return "isosceles";
    else return "scalene";
};