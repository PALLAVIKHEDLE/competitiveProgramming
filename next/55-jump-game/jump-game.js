/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const n = nums.length;
    let furthestPosition = 0;

    for (let i = 0; i < n; i++) {
        // Check if the current position is beyond the furthest position
        if (i > furthestPosition)return false;
        
        // Update the furthest position based on the current jump
        furthestPosition = Math.max(furthestPosition, i + nums[i]);

        // If the furthest position is at the end of the array, return true
        if (furthestPosition >= n - 1)return true;   
    }
return false;  
};